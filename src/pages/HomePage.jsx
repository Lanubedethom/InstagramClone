import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../components/FeedPosts";
import SuggestedUsers from "../components/SuggestedUsers";


const HomePage = () => {
    return (
        <Container maxW={'container.lg'}>
            <Flex gap={20}>
                <Box flex={2}>
                    <FeedPosts />
                </Box>

                <Box
                    flex={3}
                    maxW={'300px'}
                    display={{ base: 'none', lg: 'block' }}>

                </Box>
            </Flex>
        </Container>
    );
}

export default HomePage;


