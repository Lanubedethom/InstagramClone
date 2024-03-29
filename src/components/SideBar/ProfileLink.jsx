import { Avatar, Box, Link, Tooltip } from '@chakra-ui/react'
import { NotificationsLogo } from '../../assets/constants.jsx'
import useAuthStore from '../../store/authStore.js'
import { Link as Routerlink } from 'react-router-dom'

const ProfileLink = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Tooltip
      hasArrow
      label={'Profile'}
      placement='right'
      ml={1}
      openDelay={500}
      display={{ base: 'block', md: 'none' }}
    >
      <Link
        display={'flex'}
        to={`/${authUser?.username}`}
        as={Routerlink}
        alignItems={'center'}
        gap={4}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: 'full' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        _hover={{ bg: 'dark.300' }}
      >
        <Avatar size={'sm'} src={authUser?.profilePicURL || ''} />
        <Box display={{ base: 'none', md: 'block' }}>
          Profile
        </Box>
      </Link>
    </Tooltip>
  )
}

export default ProfileLink;