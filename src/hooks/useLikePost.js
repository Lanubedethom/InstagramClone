import useAuthStore from '../store/authStore.js'
import { useState } from 'react'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import useShowToast from './useShowToast.js'
import { db } from '../firebase/firebase.js'

const useLikePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const authUser = useAuthStore(state => state.user);
  const [likes, setLikes] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid))
  const showToast = useShowToast()

  const handleLikePost = async () => {
    if (isUpdating) return;
    if (!authUser) return showToast('Error', 'You need to be logged in to like a post', 'error');
    setIsUpdating(true);

    try {
      const postRef = doc(db, 'posts', post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
      });

      setIsLiked(!isLiked);
      isLiked ? setLikes(likes - 1) : setLikes(likes + 1)
    } catch (error) {
      showToast('Error', 'An error occurred while liking the post', 'error')
    } finally {
      setIsUpdating(false)
    }
  }

  return { isLiked, likes, handleLikePost, isUpdating }

}

export default useLikePost