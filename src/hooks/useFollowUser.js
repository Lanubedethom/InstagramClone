import { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore.js'
import useUserProfileStore from '../store/userProfileStore.js'
import useShowToast from './useShowToast.js'
import { db } from '../firebase/firebase.js'
import { doc, updateDoc, arrayRemove, arrayUnion } from 'firebase/firestore'

const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore(state => state.user);
  const setAuthUser = useAuthStore(state => state.setUser);
  const {userProfile, setUserProfile} = useUserProfileStore();
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true);

    try {
      const userDocRef = doc(db, 'users', authUser.uid);
      const userToFollowOrUnfollowDocRef = doc(db, 'users', userId);

      await updateDoc(userDocRef, {
        following: isFollowing
          ? arrayRemove(userId)
          : arrayUnion(userId)
      })

      await updateDoc(userToFollowOrUnfollowDocRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid)
      })

      if (isFollowing) {
        setAuthUser({
          ...authUser,
          following: authUser.following.filter(id => id !== userId)
        });

        setUserProfile({
          ...userProfile,
          followers: userProfile.followers.filter(id => id !== authUser.uid)
        });

        localStorage.setItem('user-info', JSON.stringify({
          ...authUser,
          following: authUser.following.filter(id => id !== userId)
        }));

        setIsFollowing(false);
      } else {
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId]
        });

        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid]
        });

        localStorage.setItem('user-info', JSON.stringify({
          ...authUser,
          following: [...authUser.following, userId]
        }));

        setIsFollowing(true);
      }


    } catch (error) {
      showToast('Error', error.message, 'error');
    } finally {
      setIsUpdating(false);
    }

    useEffect(() => {
      if (authUser) {
        const isFollowing = authUser.following.includes(userId);
        setIsFollowing(isFollowing);
      }
    }, [authUser, userId]);
  }

  return { isUpdating, isFollowing, handleFollowUser };

}

export default useFollowUser;