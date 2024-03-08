import { Avatar, Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuthStore from "../store/authStore";

const SuggestedHeader = () => {
    const { handleLogout, isLoggingOut } = useLogout();
    const authUser = useAuthStore(state => state.user)

    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex align={'center'} gap={2}>
                <RouterLink to={`${authUser.username}`}>
                    <Avatar size={'md'} src={authUser.profilePicURL} />
                </RouterLink>
                <RouterLink to={`${authUser.username}`}>
                    <Text fontSize={12} fontWeight={'bold'}>
                      {authUser.username}
                    </Text>
                </RouterLink>
            </Flex>

            <Button
                isLoading={isLoggingOut}
                onClick={handleLogout}
                size={'xs'}
                background={'transparent'}
                _hover={{ background: 'transparent' }}
                fontSize={14}
                fontWeight={'medium'}
                color={'blue.400'}
                style={{ textDecoration: 'none' }}
                cursor={'pointer'}
            >
                Log out
            </Button>
        </Flex>

    )
}

export default SuggestedHeader;