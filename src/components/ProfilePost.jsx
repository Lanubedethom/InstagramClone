import {
    Flex,
    Grid,
    GridItem,
    Text,
    Image,
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
    Box,
    Divider,
    VStack,
    Avatar,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "./Comment";
import PostFooter from "./PostFooter";

const ProfilePost = ({ img }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <GridItem
                cursor={'pointer'}
                borderRadius={4}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'gray.200'}
                position={'relative'}
                aspectRatio={1 / 1}
                onClick={onOpen}
            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position={'absolute'}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={'blackAlpha.600'}
                    transition={'all 0.3s ease'}
                    zIndex={1}
                    justifyContent={'center'}
                >
                    <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                        <Flex color={'white'}>
                            <AiFillHeart size={20} />
                            <Text fontWeight={'bold'} ml={2}>
                                7
                            </Text>
                        </Flex>

                        <Flex color={'white'}>
                            <FaComment size={20} />
                            <Text fontWeight={'bold'} ml={2}>
                                7
                            </Text>
                        </Flex>
                    </Flex>

                </Flex>

                <Image src={img} alt='Post Image' objectFit={'cover'} w={'full'} h={'full'} />

            </GridItem>

            {/*------------------Modal------------------*/}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={{ base: '3xl', md: '5xl' }}
                isCentered={true}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg={'white'} pb={5}>
                        <Flex
                            gap={4}
                            w={{ base: '90%', sm: '70%', md: 'full' }}
                            mx={'auto'}
                            maxH={'90vh'}
                            minH={'50vh'}

                        >
                            <Flex
                                borderRadius={4}
                                overflow={'hidden'}
                                border={'1px solid'}
                                borderColor={'gray.200'}
                                flex={1.5}
                                justifyContent={'center'}
                                alignContent={'center'}
                            >
                                <Image src={img} alt='as a programmer' />
                            </Flex>

                            <Flex flex={1} flexDir={'column'} px={10} display={{ base: 'none', md: 'flex' }}>
                                <Flex alignItems={'center'} justifyContent={'space-between'}>
                                    <Flex alignItems={'center'} gap={4}>
                                        <Avatar src="/profilepic.png" size={'sm'} name="ciro" />
                                        <Text fontWeight={'bold'} fontSize={12}>Ciro</Text>
                                    </Flex>

                                    <Box _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }} borderRadius={4} p={1}>
                                        <MdDelete size={20} cursor={'pointer'} />
                                    </Box>
                                </Flex>

                                <Divider my={4} bg={'gray.200'} />

                                <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                                    <Comment
                                        createdAt={'a day ago'}
                                        username='ciro'
                                        profilePic='/profilepic.png'
                                        text={'I love this post'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='Albert'
                                        profilePic='/img1.png'
                                        text={'Another day in life'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='Albert'
                                        profilePic='/img1.png'
                                        text={'Another day in life'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='Albert'
                                        profilePic='/img1.png'
                                        text={'Another day in life'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='John'
                                        profilePic='/img2.png'
                                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                                            + 'incididunt ut labore et dolore magna aliqua.'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='Ciro'
                                        profilePic='/profilepic.png'
                                        text={'this comment was written by an IA'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='Ciro'
                                        profilePic='/profilepic.png'
                                        text={'this comment was written by an IA'}
                                    />

                                    <Comment
                                        createdAt={'a day ago'}
                                        username='Ciro'
                                        profilePic='/profilepic.png'
                                        text={'this comment was written by an IA'}
                                    />


                                </VStack>

                                <Divider mt={8} bg={'gray.200'} />

                                <PostFooter isProfilePage={true} />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>

            </Modal >
        </>
    )
}

export default ProfilePost;

