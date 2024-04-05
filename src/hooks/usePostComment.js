import useAuthStore from '../store/authStore.js'
import useShowToast from './useShowToast.js'
import usePostStore from '../store/postStore.js'
import { useState } from 'react'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false)
  const showToast = useShowToast()
  const authUser = useAuthStore((state) => state.user)
  const addComment = usePostStore((state) => state.addComment)

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) return
    if (!authUser) return showToast('Error', 'Please login to comment', 'error')
    setIsCommenting(true)

    const newComment = {
      comment: comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId
    }

    try {
      await updateDoc(doc(db, 'posts', postId), {
        comments: arrayUnion(newComment)
      })
      addComment(postId, newComment)

    } catch (error) {
      showToast('Error', error.message, 'error')
    } finally {
      setIsCommenting(false)
    }
  }

  return { handlePostComment, isCommenting }
}

export default usePostComment;

