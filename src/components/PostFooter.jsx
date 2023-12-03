import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../assets/constants';


const PostFooter = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleClick = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    return (
        <>
            <Flex 
                alignItems={'center'} 
                gap={4} 
                w={'full'} 
                pt={0} 
                mb={2} 
                mt={4}> 

                <Box onClick={handleClick} >
                    {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
                </Box>

                <Box cursor={'pointer'} fontSize={18}>
                    <CommentLogo />
                </Box>
            </Flex>

            <Text fontWeight={600} fontSize={'sm'}>
                {likes} likes
            </Text>

            <Text fontSize={'sm'} fontWeight={700}>
                Ciro_{' '}
                <Text as={'span'} fontWeight={400}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptatum.
                </Text>
            </Text>

            <Text fontSize={'sm'} color={'gray'}>
                View all 100 comments
            </Text>
        </>
    )
}

export default PostFooter;