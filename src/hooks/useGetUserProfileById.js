import { useEffect, useState } from 'react'
import useShowToast from './useShowToast.js'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const useGetUserProfileById = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const showToast = useShowToast();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const userRef = await getDoc(doc(db, 'users', userId));
        if (userRef.exists()) setUserProfile(userRef.data());
      } catch (error) {
        showToast('Error', error.message, 'error');
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [showToast, setUserProfile, userId])

  return { isLoading, userProfile, setUserProfile };

}

export default useGetUserProfileById;

