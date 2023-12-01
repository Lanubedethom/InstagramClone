import { Container, Flex, Image, Box, VStack, Center } from '@chakra-ui/react'
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
    return (
        <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container maxW={'container.md'} padding={0}>
                <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
                    {/* lado derecho */}
                    <Box>
                        <Image src='/auth2.png' h={650} alt='phone image' />
                    </Box>

                    {/* lado izquierdo */}
                    <VStack spacing={4} align={'stretch'}>
                        <AuthForm />
                        <Box textAlign={'center'}>
                            Get the app
                        </Box>
                        <Flex>
                            <Image src='/playstore.png' h={'10'} alt='playstore logo' />
                            <Image src='/microsoft.png' h={'10'} alt='playstore logo' />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    );
}

export default AuthPage;

