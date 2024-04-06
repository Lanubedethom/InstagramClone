import { Avatar, Box, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { timeAgo } from "../utils/timeAgo"

const PostHeader = ({ post, creatorProfile }) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
            <Flex alignItems={'center'} gap={2}>
              {creatorProfile ? (
                <Link to={`/${creatorProfile.username}`}>
                  <Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={"sm"} />
                </Link>
              ) : (
                <SkeletonCircle size='10' />
              )}
                <Flex fontSize={12} fontWeight={'bold'} gap='2'>
                  {creatorProfile ? (
                    <Link to={`/${creatorProfile.username}`}>
                      <Text _hover={{ color: 'blue.500' }} transition={'0.2s ease-in-out'}>
                        {creatorProfile.username}
                      </Text>
                    </Link>
                  ) : (
                    <Skeleton height='10px' width={'100px'} />
                  )}

                    <Box color={'gray.500'}>
                        . {timeAgo(post.createdAt)}
                    </Box>
                </Flex>
            </Flex>

            <Box cursor={'pointer'}>
                <Text
                    fontSize={12}
                    _hover={{ color: 'white' }}
                    transition={'0.2s ease-in-out'}
                    color={'blue.500'}
                    fontWeight={'bold'}>
                    Unfollow
                </Text>
            </Box>
        </Flex>
    )
}

export default PostHeader;