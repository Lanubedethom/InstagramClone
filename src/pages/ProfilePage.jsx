import { Container, Flex, Link, Skeleton, SkeletonCircle, VStack, Text } from '@chakra-ui/react'
import ProfileHeader from "../components/ProfileHeader";
import ProfilePost from "../components/ProfilePost";
import ProfileTabs from "../components/ProfileTabs";
import ProfilePosts from "../components/ProfilePosts";
import useGetUserProfileByUsername from '../hooks/useGetUserProfileByUsername.js'
import { useParams } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);

  const userNotFound = !isLoading && !userProfile;

  if (userNotFound) return <UserNotFound/>;

    return (
        <Container maxW='container.lg' py={5}>
            <Flex
                py={10}
                px={4}
                pl={{ base: 4, md: 10 }}
                w={'full'}
                mx={'auto'}
                flexDirection={'column'}
            >
              {!isLoading && userProfile && <ProfileHeader/>}
              {isLoading && <ProfileHeaderSkeleton />}
            </Flex>

            <Flex
              px={{ base: 2, sm: 4}}
              maxW={'full'}
              mx={'auto'}
              borderTop={'1px solid'}
              borderColor={'whiteAlpha.300'}
              direction={'column'}
            >
              <ProfileTabs />
              <ProfilePosts />
            </Flex>
        </Container>
    )
}

export default ProfilePage;

const UserNotFound = () => {
  return (
    <Flex flexDir='column' textAlign={'center'} mx={'auto'}>
      <Text fontSize={'2xl'}>User not found</Text>
      <Link
          as={RouterLink}
          to='/' color={'blue.500'}
          w={'max-content'} mx={'auto'}>Go back to home</Link>
    </Flex>
  )
}

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{base: 'column', sm:'row'}}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SkeletonCircle size='24' />

      <VStack alignItems={{ base: 'center', sm: 'flex-start'}} gap={2} mx={'auto'} flex={1}>
        <Skeleton height={'12px'} width='150px' />
        <Skeleton height={'12px'} width='150px' />
      </VStack>
    </Flex>
  )
}