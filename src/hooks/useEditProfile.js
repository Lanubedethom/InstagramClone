import { useState } from 'react'
import useAuthStore from '../store/authStore.js'
import useShowToast from './useShowToast.js'
import { db, storage } from '../firebase/firebase.js'
import { doc, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import useUserProfileStore from '../store/userProfileStore.js'

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore(state => state.user);
  const setAuthUser = useAuthStore(state => state.setUser);
  const setUserProfile = useUserProfileStore(state => state.setUserProfile)
  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return setIsUpdating(true);

    /*
    esta línea de código está preparando una referencia a la ubicación donde
     se almacenará la imagen de perfil del usuario en Firebase Storage.
    * */
    const storageRef = ref(storage, `profilePictures/${authUser.uid}`);
    const userDocRef = doc(db, 'users', authUser.uid);

    let URL = '';

    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, 'data_url');
        URL = await getDownloadURL(storageRef);
      }

      const updateUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL
      }

      await updateDoc(userDocRef, updateUser);
      localStorage.setItem('user-info', JSON.stringify(updateUser));
      setAuthUser(updateUser);
      setUserProfile(updateUser);
      showToast('success', 'Profile updated successfully', 'success');

    } catch (error) {
      console.error(error);
      showToast('error', 'Error uploading image', error.message);
      return setIsUpdating(false);
    }
  }

  return { editProfile, isUpdating };

}

export default useEditProfile;