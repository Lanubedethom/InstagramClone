import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({ post, username, avatar }) => {
    return (
        <>
            <PostHeader username={username} avatar={avatar} post={post} />
            <Box my={2}>
                <Image src={avatar} alt="user profile pic" />
            </Box>
            <PostFooter username={username} post={post} />
        </>
    )
}

export default FeedPost;

