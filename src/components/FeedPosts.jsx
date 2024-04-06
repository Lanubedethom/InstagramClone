import { Container, SkeletonCircle, VStack, Flex, Skeleton, Box, Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeetPost from '../hooks/useGetFeetPost.js'

const FeedPosts = () => {
    const { isLoading, posts } = useGetFeetPost()

    return (
        <Container maxW={'container.sm'} py={10} px={2}>
            {isLoading && [0, 1, 2].map((_, index) => (
                <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
                    <Flex gap='2'>
                        <SkeletonCircle size='10' />
                        <VStack gap={2} alignItems={'flex-start'}>
                            <Skeleton height='10px' width={'200px'} />
                            <Skeleton height='10px' width={'200px'} />
                        </VStack>
                    </Flex>
                    <Skeleton w={'full'}>
                        <Box h={'400px'}>Contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
            {!isLoading && posts.length === 0 && (
              <>
                  <Text fontSize={"md"}>
                      No posts to show
                  </Text>
              </>
            )}
        </Container>
    );
}

export default FeedPosts;