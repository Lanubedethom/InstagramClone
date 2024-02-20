import {
    Avatar,
    Text,
    AvatarGroup, Button, Flex, VStack
} from "@chakra-ui/react";

const ProfileHeader = ({ user }) => {
    return (
        <Flex gap={{ base: 4, sm: 10 }}
            py={10}
            direction={{ base: 'column', sm: 'row' }}
        >
            <AvatarGroup
                size={{ base: "xl", md: "2xl" }}
                py={10}
                justifySelf={'center'}
                alignSelf={'center'}
                mx={'auto'}
            >
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' alt='As a programmer log' />
            </AvatarGroup>

            <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
                <Flex
                    gap={4}
                    direction={{ base: 'column', sm: 'row' }}
                    justifyContent={{ base: 'center', sm: 'flex-start' }}
                    alignItems={'center'}
                    w={'full'}
                >
                    <Text fontSize={{ base: 'sm', md: 'lg' }}>
                        As a programmmer
                    </Text>

                    <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                        <Button
                            bg={'white'}
                            color={'black'}
                            _hover={{ bg: 'whiteAlpha.800' }}
                            size={{ base: 'xs', md: 'sm' }}
                        >
                            Edit Profile
                        </Button>
                    </Flex>

                </Flex>

                <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
                        Posts
                    </Text>
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as={'span'} fontWeight={'bold'} mr={1}>14</Text>
                        Followers
                    </Text>
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as={'span'} fontWeight={'bold'} mr={1}>4454</Text>
                        Following
                    </Text>
                </Flex>

                <Flex alignItems={'center'} gap={4}>
                    <Text fontSize={'sm'} fontWeight={'bold'}>
                        As a programmer
                    </Text>
                </Flex>

                <Text fontSize={'sm'} >
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum l
                    orem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Text>
            </VStack>

        </Flex >
    );
};


export default ProfileHeader;
