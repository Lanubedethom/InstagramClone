import { Grid, Skeleton, VStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    });

    return (
        <Grid
            templateColumns={{ sm: 'repeat(1, ifr)', md: 'repeat(3, 1fr)' }}
            gap={1}
            columnGap={1}
        >
            {isLoading && [0, 2, 3, 4, 5].map((_, index) => (
                <VStack key={index} alignItems={'flex-start'} gap={4}>
                    <Skeleton w={'full'}>
                        <Box h={'300px'}>
                            Contentent Wrappers
                        </Box>
                    </Skeleton>
                </VStack>
            ))}

            {!isLoading && (
                <>
                    <ProfilePost img='https://bit.ly/ryan-florence' />
                    <ProfilePost img='https://bit.ly/dan-abramov' />
                    <ProfilePost img='https://bit.ly/kent-c-dodds' />
                    <ProfilePost img='https://bit.ly/ryan-florence' />
                    <ProfilePost img='https://bit.ly/dan-abramov' />
                    <ProfilePost img='https://bit.ly/kent-c-dodds' />
                    <ProfilePost img='https://bit.ly/ryan-florence' />
                    <ProfilePost img='https://bit.ly/dan-abramov' />


                </>
            )}

        </Grid>
    )
}

export default ProfilePosts;

