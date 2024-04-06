import useShowToast from './useShowToast.js'
import { useState } from 'react'
import useUserProfileStore from '../store/userProfileStore.js'
import { useLocation } from 'react-router-dom'
import usePostStore from '../store/postStore.js'
import useAuthUser from '../store/authStore.js'
import { arrayUnion, collection, doc, updateDoc, addDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { db, storage } from '../firebase/firebase.js'



const useCreatePost = () => {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthUser((state) => state.user);
  const addPost = useUserProfileStore((state) => state.addPost);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const createPost = usePostStore((state) => state.createPost);
  const { pathname } = useLocation();

  const handleCreatePost = async (caption, selectedFile) => {
    if (isLoading) return;
    if (!caption && !selectedFile) {
      showToast('Error', 'Please add a caption or image', 'error');
      setIsLoading(false);
    }
    setIsLoading(true);
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createBy: authUser.uid,
    }

    try {
      const postDocRef = await addDoc(collection(db, 'posts'), newPost);
      const userDocRef = doc(db, 'users', authUser.uid);
      const imageRef = ref(storage, `posts/${postDocRef.id}`);
      await updateDoc(userDocRef, {
        posts: arrayUnion(postDocRef.id),
      });
      await uploadString(imageRef, selectedFile, 'data_url');
      const downloadUrl = await getDownloadURL(imageRef);
      await updateDoc(postDocRef, {
        imageUrl: downloadUrl,
      });

      newPost.imgUrl = downloadUrl;
      if (userProfile?.id === authUser.uid) {
        createPost({ ...newPost, id: postDocRef.id });
      }
      if (pathname !== '/' && userProfile?.id === authUser.uid) {
        addPost({ ...newPost, id: postDocRef.id });
      }
      showToast('Success', 'Post created successfully', 'success');
    } catch (error) {
      showToast('Error', error.message, 'error');
    } finally {
      setIsLoading(false);
    }


  }

  return { handleCreatePost, isLoading }

}

export default useCreatePost;