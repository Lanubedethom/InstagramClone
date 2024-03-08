import { Input, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { loading, error, login } = useLogin();

    return (
        <>
            <Input
                placeholder='lanubedethom@gmail.com'
                fontSize={14}
                type="email"
                onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <Input
                placeholder='Password'
                fontSize={14}
                type="password"
                onChange={(e) => setInput({ ...input, password: e.target.value })}
            />

            {error && (
                <Alert status='error' fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}

            <Button
                w={'full'}
                colorScheme="blue"
                size={'sm'}
                fontSize={14}
                isLoading={loading}
                onClick={() => login(input)}
            >
                Login
            </Button>
        </>
    )
}

export default Login;