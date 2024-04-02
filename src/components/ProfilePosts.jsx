import { Box, Flex, Grid, Skeleton, Text, VStack } from '@chakra-ui/react'
import ProfilePost from './ProfilePost'
import useGetUserPosts from '../hooks/useGetUserPosts.js'

const ProfilePosts = () => {
  const { isLoading, posts } = useGetUserPosts()

  const noPostFound = !isLoading && posts.length === 0
  if (noPostFound) return <NoPostsFound />

  return (
    <Grid
      templateColumns={{ sm: 'repeat(1, ifr)', md: 'repeat(3, 1fr)' }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 2, 3].map((_, index) => (
          <VStack key={index} alignItems={'flex-start'} gap={4}>
            <Skeleton w={'full'}>
              <Box h={'300px'}>Contentent Wrappers</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          {posts.map((post) => (
            <ProfilePost key={post.id} post={post} />
          ))}
        </>
      )}
    </Grid>
  )
}

export default ProfilePosts

const NoPostsFound = () => {
  return (
    <Flex flexDir={'column'} textAlign={'center'} mx={'auto'} mt={10}>
      <Text fontSize={'2xl'}>No posts found</Text>
    </Flex>
  )
}
