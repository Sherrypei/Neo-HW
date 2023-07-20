import {Card, CardBody, Text,Flex, Center} from "@chakra-ui/react";
import announcement from "@/data/Announcements.jsx";

const SingleAnnouncement = ({info}) => {
    const {zhTitle, enTitle} = info;
    return (
        <Flex w="85%" alignSelf="center">
            <Center>
                <Card>
                    <CardBody>
                        <Text align="center" fontSize="16px">{zhTitle}</Text>
                        <Text align="center" fontSize="12px">{enTitle}</Text>
                    </CardBody>
                </Card>
            </Center>

        </Flex>

    )
}
export default SingleAnnouncement