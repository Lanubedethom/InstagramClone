import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import { CreatePostLogo, NotificationsLogo } from '../../assets/constants.jsx'
import { BsFillImageFill } from 'react-icons/bs'
import { useRef, useState } from 'react'
import usePreviewImg from '../../hooks/usePreviewImg.js'
import useCreatePost from '../../hooks/useCreatePost.js'

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [caption, setCaption] = useState('')
  const imageRef = useRef(null)
  const { selectedFile, handleImageChange, setSelectedFile } = usePreviewImg()
  const { handleCreatePost, isLoading } = useCreatePost()

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(caption, selectedFile)
      onClose()
      setCaption('')
      setSelectedFile(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Tooltip
        hasArrow
        label={'Create'}
        placement='right'
        ml={1}
        openDelay={500}
        display={{ base: 'block', md: 'none' }}
      >
        <Flex
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
          <CreatePostLogo />
          <Box display={{ base: 'none', md: 'block' }}>Create</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />

        <ModalContent bg={'white'} border={'1px solid black'}>
          <ModalHeader color={'black'}>Create Post</ModalHeader>
          <ModalCloseButton color={'black'} />
          <ModalBody pb={6}>
            <Textarea
              placeholder='Post caption...'
              color={'black'}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <Input
              type='file'
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />

            <BsFillImageFill
              onClick={() => imageRef.current.click()}
              style={{
                marginTop: '15px',
                marginLeft: '5px',
                cursor: 'pointer',
                color: 'black',
              }}
              size={16}
            />
            {selectedFile && (
              <Flex
                mt={5}
                w={'full'}
                position={'relative'}
                justifyContent={'center'}
              >
                <Image src={selectedFile} alt={'selected image'} />
                <CloseButton
                  position={'absolute'}
                  color={'white'}
                  top={2}
                  right={2}
                  onClick={() => setSelectedFile(null)}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handlePostCreation}
              isLoading={isLoading}
              colorScheme='blue'
              mr={3}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost
