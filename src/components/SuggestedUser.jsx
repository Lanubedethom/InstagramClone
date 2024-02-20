import { Avatar, Box, Flex, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
    const [isFollowing, setIsFollowing] = useState(false);


    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={avatar} size={'md'} name={name} />
                <VStack spacing={2}>
                    <Box fontSize={12} fontWeight={'bold'}>
                        {name}
                    </Box>
                    <Box fontSize={11} color={'gray.500'}>
                        {followers} followers
                    </Box>
                </VStack>
            </Flex>

            <button
                fontSize={13}
                bg={'transparent'}
                p={0}
                h={'max-content'}
                fontWeight={'medium'}
                color={'blue.400'}
                curso={'pointer'}
                _hover={{ color: 'white' }}
                onClick={() => setIsFollowing(!isFollowing)}
            >
                {isFollowing ? 'Following' : 'Follow'}
            </button>
        </Flex>
    )
}

export default SuggestedUser;