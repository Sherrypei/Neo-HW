import {Card, CardBody, Text,Flex} from "@chakra-ui/react";
import announcement from "@/data/Announcements.jsx";

const SingleAnnouncement = ({info}) => {
    const {zhTitle, enTitle} = info;
    return (
        <Flex  >
                <Card  minW="55vw">
                    <CardBody>
                        <Text align="center" fontSize="16px">{zhTitle}</Text>
                        <Text align="center" fontSize="12px">{enTitle}</Text>
                    </CardBody>
                </Card>

        </Flex>

    )
}
export default SingleAnnouncement