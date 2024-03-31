import {
  Box, Button, Flex, FormControl, FormLabel, Input,
  Link,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { NotificationsLogo, SearchLogo } from '../../assets/constants.jsx'
import { useRef } from 'react'
import useSearchUser from '../../hooks/useSearchUser.js'
import SuggestedUser from '../SuggestedUser.jsx'

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const searchRef = useRef(null);
  const { user, isLoading, getUserProfile, setUser } = useSearchUser()

  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
    console.log(user)
  }



  return (
    <>
      <Tooltip
        hasArrow
        label={'Search'}
        placement="right"
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
          onClick={onOpen}
        >
          <SearchLogo />
          <Box display={{ base: 'none', md: 'block' }}>
            Search
          </Box>
        </Link>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={'slideInLeft'}
      >
        <ModalOverlay />
        <ModalContent bg={'white'} maxW={'400px'}>
          <ModalHeader>Search User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder={'nice-nice'} ref={searchRef} />
              </FormControl>

              <Flex w={'full'} justifyContent={'flex-end'}>
                <Button type={'submit'} ml={'auto'} size={'sm'} my={4} isLoading={isLoading}>
                  Search
                </Button>
              </Flex>

            </form>
            {user && <SuggestedUser user={user} setUser={setUser} />}
          </ModalBody>
        </ModalContent>

      </Modal>
    </>


  )
}

export default Search

