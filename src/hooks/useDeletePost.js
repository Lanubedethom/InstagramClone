import { useState } from 'react'
import useShowToast from './useShowToast.js'
import { arrayRemove, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import useAuthStore from '../store/authStore.js'
import { db, storage } from '../firebase/firebase.js'
import usePostStore from '../store/postStore.js'
import useUserProfileStore from '../store/userProfileStore.js'

const useDeletePost = ({ post }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const decrementPostCount = useUserProfileStore((state) => state.deletePost);
  const deletePost = usePostStore((state) => state.deletePost);
  if (isDeleting) return;

  const handleDeletePost = async () => {
     if (!window.confirm('Are you sure you want to delete this post?')) return;

     try {
       const imageRef = ref(storage, `posts/${post.id}`);
       await deleteObject(imageRef);
       const userRef = doc(db, 'users', authUser.uid);
       await deleteDoc(doc(db, 'posts', post.id));

       await updateDoc(userRef, {
         posts: arrayRemove(post.id),
       });

       deletePost(post.id);
       decrementPostCount(post.id);
       showToast('Success', 'Post deleted successfully', 'success');
     } catch (error) {
       showToast('Error', error.message, 'error');
     } finally {
        setIsDeleting(false);
     }
  }

  return { handleDeletePost, isDeleting}
}

export default useDeletePost;