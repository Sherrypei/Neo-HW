import {Card, CardBody, Text, Flex} from "@chakra-ui/react";
import announcement from "@/data/Announcement.jsx";
const {zhTitle, enTitle} = announcement;

const Announcement1 = () => {
    return (
        <Card>
            <CardBody>
                <Text align="center" fontSize="16px">{zhTitle}</Text>
                <Text align="center" fontSize="12px">{enTitle}</Text>
            </CardBody>
        </Card>
    )
}
export default Announcement1