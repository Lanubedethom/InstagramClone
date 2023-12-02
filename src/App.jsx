import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import PageLayout from './layout/PageLayout'


function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App