import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../components/FeedPosts";


const HomePage = () => {
    return (
        <Container maxW={'container.lg'}>
            <Flex gap={20}>
                <Box flex={2} border={'1px solid blue'}>
                    <FeedPosts />
                </Box>
                
                <Box 
                    flex={3} 
                    maxW={'300px'}
                    border={'1px solid red'}
                    display={{base: 'none', lg: 'block'}}>
                    suggestions
                </Box>
            </Flex>
        </Container>
    );
}

export default HomePage;


