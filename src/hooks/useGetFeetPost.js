import { useEffect, useState } from 'react'
import usePostStore from '../store/postStore.js'
import useAuthStore from '../store/authStore.js'
import useShowToast from '../hooks/useShowToast.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import useUserProfileStore from '../store/userProfileStore.js'


const useGetFeetPost = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { posts, setPosts } = usePostStore()
  const authUser = useAuthStore((state) => state.user)
  const showToast = useShowToast()
  const { setUserProfile } = useUserProfileStore()

  useEffect(() => {
    const getFeedPosts = async () => {
      setIsLoading(true);
      if (authUser.following.length === 0) {
        setIsLoading(false);
        setPosts([])
        return;
      }
      const q = query(
        collection(db, 'posts'),
        where('createBy', 'in', authUser.following)
      )
      try {
        const querySnapshot = await getDocs(q);
        const feedPosts = [];

        querySnapshot.forEach((doc) => {
          feedPosts.push({ id: doc.id,...doc.data() });
        });
        feedPosts.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(feedPosts);
      } catch (error) {
        showToast('Error', error.message, 'error')
      } finally {
        setIsLoading(false)
      }
    }

    if (authUser) getFeedPosts(); // Llama a la función aquí
  }, [authUser, showToast, setPosts, setUserProfile])

  return { isLoading, posts}
}

export default useGetFeetPost;