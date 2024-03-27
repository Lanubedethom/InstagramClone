import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useRef, useState } from 'react'
import useAuthStore from '../store/authStore'
import usePreviewImg from '../hooks/usePreviewImg.js'
import useEditProfile from '../hooks/useEditProfile.js'
import useShowToast from '../hooks/useShowToast.js'

const EditProfile = ({ isOpen, onClose }) => {
	const [input, setInput] = useState({
		fullName: "",
		userName: '',
		bio: ''
	})
	const fileRef = useRef(null);
	const authUser = useAuthStore(state => state.user);
	const {handleImageChange, selectedFile, setSelectedFile} = usePreviewImg();
	const {isUpdating, editProfile} = useEditProfile();
	const showToast = useShowToast();

	const handleEditProfile = async () => {
		try {
			await editProfile(input, selectedFile);
			setSelectedFile(null);
			onClose();
		} catch (error) {
			showToast('error', error.message, 'error')
		}

	}


	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg={"white"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"white"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }} color={"black"}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar
												size='xl'
												src={selectedFile || authUser.profilePicURL}
												border={"2px solid black "} />
										</Center>
										<Center w='full'>
											<Button
													w='full'
													bg={"gray.200"}
													color={"black"}
													onClick={() => fileRef.current.click()}
													_hover={{ bg: "gray.300" }}>Edit Profile Picture</Button>
										</Center>
										<Input
												type={"file"}
												hidden
												ref={fileRef}
												onChange={handleImageChange}
										/>
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"} color={"black"}>Full Name</FormLabel>
									<Input placeholder={"Full Name"} size={"sm"} type={"text"}
										value={input.fullName || authUser.fullName}
										onChange={(e) => setInput({ ...input, fullName: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"} color={"black"}>Username</FormLabel>
									<Input placeholder={"Username"} size={"sm"} type={"text"}
										value={input.userName || authUser.username}
										onChange={(e) => setInput({ ...input, userName: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"} color={"black"}>Bio</FormLabel>
									<Input placeholder={"Bio"} size={"sm"} type={"text"}
										value={input.bio || authUser.bio}
										onChange={(e) => setInput({ ...input, bio: e.target.value })}
									/>
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"gray.200"}
										color={"black"}
										w='full'
										size='sm'
										_hover={{ bg: "gray.300" }}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"gray.200"}
										color={"black"}
										size='sm'
										w='full'
										_hover={{ bg: "gray.300" }}
										onClick={handleEditProfile}
										isLoading={isUpdating}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;