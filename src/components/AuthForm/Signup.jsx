import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useState } from 'react'

const Signup = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        fullName: '',
        username: '',
        password: ''

    })

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Input
                placeholder='Email'
                fontSize={14}
                type="email"
                size={'sm'}
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <Input
                placeholder='Username'
                fontSize={14}
                type="text"
                size={'sm'}
                value={input.username}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <Input
                placeholder='Full Name'
                fontSize={14}
                type="text"
                size={'sm'}
                value={input.fullName}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder='Password'
                    fontSize={14}
                    type={showPassword ? 'text' : 'password'}
                    value={input.password}
                    size={'sm'}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                />

                <InputRightElement h={'full'}>
                    <Button
                        variant={'ghost'}
                        size={'sm'}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14}>
                Sign up
            </Button>
        </>
    )
}

export default Signup