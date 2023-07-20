import {Card, CardBody, Text, Flex, useMediaQuery} from "@chakra-ui/react";
import announcement from "@/data/Announcements.jsx";

const SingleAnnouncement = ({info}) => {
    const {zhTitle, enTitle} = info;
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex  >
                <Card w="100%">
                    <CardBody>
                        <Text align="center" fontSize="16px">{zhTitle}</Text>
                        <Text align="center" fontSize="12px">{enTitle}</Text>
                    </CardBody>
                </Card>

        </Flex>

    )
}
export default SingleAnnouncement