import { Box, Link, Tooltip } from '@chakra-ui/react'
import { CreatePostLogo, NotificationsLogo } from '../../assets/constants.jsx'

const CreatePost = () => {
  return (
    <Tooltip
      hasArrow
      label={'Create'}
      placement='right'
      ml={1}
      openDelay={500}
      display={{ base: 'block', md: 'none' }}
    >
      <Link
        display={'flex'}
        alignItems={'center'}
        gap={4}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: 'full' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        _hover={{ bg: 'dark.300' }}
      >
        <CreatePostLogo />
        <Box display={{ base: 'none', md: 'block' }}>
          Create 
        </Box>
      </Link>
    </Tooltip>
  )
}

export default CreatePost;

