import { VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestesHeader";

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
        </VStack>
    )
}

export default SuggestedUsers;