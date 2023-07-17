import Announcement1 from "@/components/Announcement1.jsx";
import Announcement2 from "@/components/Announcement2.jsx";
import Announcement3 from "@/components/Announcement3.jsx";
import {SimpleGrid} from "@chakra-ui/react";
const Announement = () => {
    return (
        <SimpleGrid /*spacing={4} templateColumns='repeat(auto-fill, 500px)'*/>
            <Announcement1/>
            <Announcement2/>
            <Announcement3/>
        </SimpleGrid>
    )
}

export default Announement