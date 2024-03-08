import { Flex, Image, Text } from '@chakra-ui/react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import useShowToast from '../../hooks/useShowToast.js'
import useAuthStore from '../../store/authStore.js'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db, auth } from '../../firebase/firebase.js'

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore(state => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast('error', error.message);
        return;
      }

      // Primero, buscar si el usuario existe en la bbdd
      const userRef = doc(db, 'users', newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // Si existe, loguear al usuario
        const userDoc = userSnap.data();
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        loginUser(userDoc);
      } else {
        // Si no existe, crear un nuevo documento de usuario
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split('@')[0],
          fullName: newUser.user.displayName,
          bio: '',
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
        }

        await setDoc(doc(db, 'users', newUser.user.uid), userDoc);
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast('error', error.message);
    }
  }
    return (
        <>
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              cursor={'pointer'}
              onClick={handleGoogleAuth}
            >
                <Image src="/google.png" w={5} alt='google logo' />
                <Text mx='2' color={'blue.500'}>
                  {prefix} with google
                </Text>
            </Flex>
        </>
    )
}

export default GoogleAuth