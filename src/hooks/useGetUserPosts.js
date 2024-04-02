import { useEffect, useState } from 'react'
import useShowToast from './useShowToast.js'
import useUserProfileStore from '../store/userProfileStore.js'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const showToast = useShowToast()
  const userProfile = useUserProfileStore((state) => state.userProfile)

  useEffect(() => {
    const getPosts = async () => {
      if (!userProfile) return
      setIsLoading(true)
      setPosts([])

      try {
        const q = query(
          collection(db, 'posts'),
          where('createBy', '==', userProfile.uid)
        )
        const querySnapshot = await getDocs(q)

        const posts = []
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id })
        })

        posts.sort((a, b) => b.createdAt - a.createdAt)
        setPosts(posts)
      } catch (error) {
        showToast('Error', error.message, 'error')
      } finally {
        setIsLoading(false)
      }
    };
    getPosts();
  }, [setPosts, userProfile, showToast])

  return { isLoading, posts }
}

export default useGetUserPosts
