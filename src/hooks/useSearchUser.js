import useShowToast from './useShowToast.js'
import { useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const showToast = useShowToast()

  const getUserProfile = async (username) => {
    setIsLoading(true)
    try {
      const q = query(collection(db, 'users'), where('username', '==', username))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) return showToast('Error', 'User not found', 'error');

      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (error) {
      showToast('Error', error.message, 'error')
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  return { user, isLoading, getUserProfile, setUser }
}

export default useSearchUser;

