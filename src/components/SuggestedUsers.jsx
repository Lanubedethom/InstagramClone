import { Flex, VStack, Text, Link, Box } from '@chakra-ui/react'
import SuggestedHeader from "./SuggestesHeader";
import SuggestedUser from './SuggestedUser.jsx'

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
                <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
                    See All
                </Text>
            </Flex>

            <SuggestedUser name='Dan Brown' followers={13697} avatar={'https://bit.ly/dan-abramov'} />
            <SuggestedUser />
            <SuggestedUser />

            <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
                2023 built by {''}
                <Link
                    href={'www.google.com'}
                    color={'blue.500'}
                    fontSize={14}
                    target='_blank'>
                    As a programmer
                </Link>
            </Box>
        </VStack >

    )
}

export default SuggestedUsers;
