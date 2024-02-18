import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
    return (
        <Container maxW={'container.sm'} py={10} px={2}>
            <FeedPost img='/img5.jpg' username='Ciro' avatar='/img5.jpg' />
            <FeedPost img='/img1.png' username='Lara' avatar='/img1.png' />
            <FeedPost img='/img2.png' username='Abba' avatar='/img2.png' />
            <FeedPost img='/img3.png' username='Jhon' avatar='/img3.png' />
            <FeedPost img='/img4.png' username='Jhon' avatar='/img4.png' />
        </Container>
    );
}

export default FeedPosts;