import {Center, Flex, VStack} from "@chakra-ui/react";
import SingleAnnouncement from "@/components/SingleAnnouncement";
import announcements from "@/data/Announcements";
const Announcement = () => {
    return (
            <Flex justifyContent="center">
                <VStack gap="31px" alignItems="stretch">
                        {announcements.map((info, idx) => (
                            <SingleAnnouncement key={idx} info={info}/>
                        ))}

                </VStack>
            </Flex>
    )
}

export default Announcement