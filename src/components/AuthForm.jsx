import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''

    })

    const handleAuth = () => {
        if (!input.email || !input.password) {
            alert('please fill all the fields')
            return;
        }

        navigate('/');
    }

    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src='/logo.png' h={'24'} alt='instagram' cursor={'pointer'} />
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

                    {!isLogin ?
                        <Input
                            placeholder="confirm password"
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                            fontSize={14}
                            type="password" /> : null}

                    <Button w={'full'} colorScheme="blue" size={'sm'} fontSize={14} onClick={handleAuth}>
                        {isLogin ? 'Log in' : 'Sign up'}
                    </Button>

                    {/*----------------OR----------------- */}
                    <Flex alignItems={'center'} justifyContent={'center'} w={'full'} my={4} gap={1}>
                        <Box flex={2} h={'1px'} bg={'gray'} />
                        <Text fontSize={14} color={'white'}>OR</Text>
                        <Box flex={2} h={'1px'} bg={'gray'} />
                    </Flex>

                    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                        <Image src="/google.png" w={5} alt='google logo' />
                        <Text mx='2' color={'blue.500'}>
                            Log in with google
                        </Text>
                    </Flex>

                    <Box>
                        <Flex alignItems={'center'} justifyContent={'center'}>
                            <Box mx={2} fontSize={14}>
                                {isLogin ? 'dont have an acount? ' : 'Already have an acount? '}
                            </Box>
                            <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
                                {isLogin ? 'Sign up' : 'Log in'}
                            </Box>
                        </Flex>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}

export default AuthForm;