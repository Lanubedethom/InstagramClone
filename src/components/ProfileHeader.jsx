import {
  Avatar,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AvatarGroup,
  Button,
  Flex,
  VStack,
} from '@chakra-ui/react'
import useUserProfileStore from '../store/userProfileStore.js'
import useAuthStore from '../store/authStore.js'
import EditProfile from './EditProfile.jsx'
import useFollowUser from '../hooks/useFollowUser.js'

const ProfileHeader = ({ user }) => {
  //const { userProfile } = useUserProfileStore();
  const userProfile = useUserProfileStore((state) => state.userProfile)
  const authUser = useAuthStore((state) => state.user)
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(
    userProfile?.uid
  )
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username
  // para editar el perfil
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      <AvatarGroup
        size={{ base: 'xl', md: '2xl' }}
        py={10}
        justifySelf={'center'}
        alignSelf={'center'}
        mx={'auto'}
      >
        <Avatar
          name={userProfile.name}
          src={userProfile.profilePicURL}
          alt={userProfile.userProfile}
        />
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>
            {userProfile.username}
          </Text>

          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
              <Button
                bg={'blue'}
                color={'white'}
                _hover={{ bg: 'blue.800' }}
                size={{ base: 'xs', md: 'sm' }}
                onClick={onOpen}
              >
                Edit Profile
              </Button>
            </Flex>
          )}

          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
              <Button
                bg={'blue'}
                color={'white'}
                _hover={{ bg: 'blue.800' }}
                size={{ base: 'xs', md: 'sm' }}
                onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.posts.length} Posts
            </Text>
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.followers.length} Followers
            </Text>
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              {userProfile.following.length} Following
            </Text>
          </Text>
        </Flex>

        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>
            {userProfile.fullName}
          </Text>
        </Flex>

        <Text fontSize={'sm'}>{userProfile.bio}</Text>
      </VStack>

      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

export default ProfileHeader
