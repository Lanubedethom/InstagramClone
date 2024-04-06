import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import useGetUserProfileById from '../hooks/useGetUserProfileById.js'

const FeedPost = ({ post }) => {
  const { isLoading, userProfile } = useGetUserProfileById(post.createdBy);
    return (
        <>
            <PostHeader post={post} creatorProfile={userProfile} />
            <Box my={2}>
                <Image src={post.imageUrl} alt="user profile pic" />
            </Box>
            <PostFooter post={post} creatorProfile={userProfile} />
        </>
    )
}

export default FeedPost;

