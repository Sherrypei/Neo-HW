import {Card, CardBody, Text, Flex, useMediaQuery} from "@chakra-ui/react";
import announcement from "@/data/Announcements.jsx";

const SingleAnnouncement = ({info}) => {
    const {zhTitle, enTitle} = info;
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex>
            <Card w="100%" shadow="lg" _hover={{
                bg: 'gray.100',
                boxShadow: 'inner',
                transitionDuration: '0.5s',
            }}>
                <CardBody gap="0">
                    <Text align="center" fontSize="16px">{zhTitle}</Text>
                    <Text align="center" fontSize="12px">{enTitle}</Text>
                </CardBody>
            </Card>

        </Flex>

    )
}
export default SingleAnnouncement