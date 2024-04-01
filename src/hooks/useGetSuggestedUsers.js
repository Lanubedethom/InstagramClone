import { useEffect, useState } from 'react'
import useAuthStore from '../store/authStore.js'
import useShowToast from './useShowToast.js'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const useGetSuggestedUsers = () => {
  const [isLoading, setLoading] = useState(true)
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const authUser = useAuthStore((state) => state.user)
  const showToast = useShowToast()

  useEffect(() => {
    const getSuggestedUsers = async () => {
      setLoading(true)
      try {
        const usersRef = collection(db, 'users')
        const q = query(
          usersRef,
          where('uid', 'not-in', [...authUser.following, authUser.uid]),
          orderBy('uid'),
          limit(3)
        )

        const querySnapshot = await getDocs(q)
        const users = []
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id })
        })

        setSuggestedUsers(users)
      } catch (error) {
        showToast('Error', error.message, 'error')
      } finally {
        setLoading(false)
      }
    }

    if (authUser) getSuggestedUsers()
  }, [authUser, showToast])

  return { isLoading, suggestedUsers }
}

export default useGetSuggestedUsers
