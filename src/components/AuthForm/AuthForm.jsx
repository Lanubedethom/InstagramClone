import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    //const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src='/logo.png' h={'24'} alt='instagram' cursor={'pointer'} />

                    {isLogin ? <Login /> : <Signup />}

                    {/*----------------OR----------------- */}
                    <Flex alignItems={'center'} justifyContent={'center'} w={'full'} my={4} gap={1}>
                        <Box flex={2} h={'1px'} bg={'gray'} />
                        <Text fontSize={14} color={'white'}>OR</Text>
                        <Box flex={2} h={'1px'} bg={'gray'} />
                    </Flex>

                    <GoogleAuth />

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