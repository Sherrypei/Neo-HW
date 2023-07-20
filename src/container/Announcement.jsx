import {Center, Flex, VStack} from "@chakra-ui/react";
import SingleAnnouncement from "@/components/SingleAnnouncement";
import announcements from "@/data/Announcements";
const Announcement = () => {
    return (
            <Center>
                <VStack spacing ="31px">
                        {announcements.map((info, idx) => (
                            <SingleAnnouncement key={idx} info={info}/>
                        ))}

                </VStack>
            </Center>
    )
}

export default Announcement