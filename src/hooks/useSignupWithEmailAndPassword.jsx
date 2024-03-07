import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase/firebase'
import { setDoc, doc, collection, getDocs, where, query } from 'firebase/firestore'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'

const useSignupWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth)
    const showToast = useShowToast()
    const loginUser = useAuthStore(state => state.login)
    const logoutUser = useAuthStore(state => state.logout)


    const signup = async (input) => {
        if (!input.email || !input.password || !input.username || !input.fullName) {
            showToast('Error', 'Please fill all the fields', 'error');
            console.log('Please fill all the fields');
            return;
        }

        // hacemos una consulta para debolver todos los usuarios que tengan el mismo username
        // si el querySnapshot no esta vacio, significa que ya existe un usuario con ese 
        // username
        const userRef = collection(db, 'users');
        const q = query(userRef, where('username', '==', input.username));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            showToast('Error', 'Username already taken', 'error');
            return;
        }



        try {
            {/* el metodo createUse.. verifica que no exista dos emails, pero usuarios */ }
            const newUser = await createUserWithEmailAndPassword(input.email, input.password)
            if (!newUser && error) {
                showToast('Error', error.message, 'error');
                return;
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: input.email,
                    username: input.username,
                    fullName: input.fullName,
                    bio: '',
                    profilePicURL: '',
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
            showToast('Error', error.message, 'error');
        }
    }

    return { loading, error, signup }
}

export { useSignupWithEmailAndPassword }    