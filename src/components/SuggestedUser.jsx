import { Avatar, Box, Flex, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import useFollowUser from '../hooks/useFollowUser.js'
import useAuthStore from '../store/authStore.js'
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
    const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(user.id);
    //
    const authUser = useAuthStore((state) => state.user);
    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing
                ? user.followers.filter((id) => id !== authUser.uid)
                : [...user.followers, authUser.uid],

        })
    }

    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Link to={`/${user.username}`}>
                    <Avatar src={user.profilePicURL} size={'md'} name={name} />
                </Link>
                <VStack spacing={2}>
                    <Link to={`/${user.username}`}>
                        <Box fontSize={12} fontWeight={'bold'}>
                            {user.fullName}
                        </Box>
                    </Link>
                    <Box fontSize={11} color={'gray.500'}>
                        {user.followers.length} followers
                    </Box>
                </VStack>
            </Flex>

          {authUser.uid !== user.uid && (
            <Button
              fontSize={13}
              bg={'transparent'}
              p={0}
              h={'max-content'}
              fontWeight={'medium'}
              color={'blue.400'}
              curso={'pointer'}
              _hover={{ color: 'white' }}
              onClick={onFollowUser}
              isLoading={isUpdating}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          )}
        </Flex>
    )
}

export default SuggestedUser;