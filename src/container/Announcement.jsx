import {Flex} from "@chakra-ui/react";
import SingleAnnouncement from "@/components/SingleAnnouncement";
import announcements from "@/data/Announcements";
const Announcement = () => {
    return (
        <Flex flexwrap="wrap" flexDir="column">
            {announcements.map((info, idx) => (
                <SingleAnnouncement key={idx} info={info}/>
            ))}
        </Flex>
    )
}

export default Announcement