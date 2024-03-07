import { Button, ButtonGroup } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import ProfilePage from './pages/ProfilePage'
import PageLayout from './layout/PageLayout'
import useAuthStore from './store/authStore'
import { useAuthState } from 'react-firebase-hooks/auth'


// haciendo cambios en la rama nice




function App() {
  {/**esto confira si el usuario se autentico o no */ }
  //const authUser = useAuthStore(state => state.user)
  // esto es ultimo miniuto, este hook es de react-firebase-hooks
  // sirve para escuchar el estado de autenticacion de firebase
  // si el usuario esta autenticado, authUser es el usuario
  const [authUser] = useAuthState(auth);

  return (
    <PageLayout>
      <Routes>
        {/*si se autentico, mostrar homepage. coso contrario, autenticarse */}
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App