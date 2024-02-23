import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''

    })

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

            <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14}>
                Login
            </Button>
        </>
    )
}

export default Login;