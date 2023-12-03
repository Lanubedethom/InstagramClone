import PostFooter from "./PostFooter"; 
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({ post }) => {
    return (
        <>
            <PostHeader post={post} />
            <Box>
                <Image src='/img1.png' alt="user profile pic" />
            </Box>
            <PostFooter post={post} />
        </>
    )
}

export default FeedPost;

    