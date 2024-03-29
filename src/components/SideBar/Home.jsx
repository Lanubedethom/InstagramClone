import { Box, Link, Tooltip } from '@chakra-ui/react'
import { Link as Routerlink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label={'Home'}
      placement='right'
      ml={1}
      openDelay={500}
      display={{ base: 'block', md: 'none' }}
    >
      <Link
        display={'flex'}
        alignItems={'center'}
        gap={4}
        to={'/'}
        as={Routerlink}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: 'full' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}
        _hover={{ bg: 'dark.300' }}
      >
        <AiFillHome size={25} />
        <Box display={{ base: 'none', md: 'block' }}>
          Home
        </Box>
      </Link>
    </Tooltip>
  )
}
export default Home
