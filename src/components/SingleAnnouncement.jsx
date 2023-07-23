import {Card, CardBody, Flex, Text} from "@chakra-ui/react";

const SingleAnnouncement = ({info}) => {
    const {zhTitle, enTitle} = info;
    return (
        <Flex>
            <Card w="100%" shadow="lg" _hover={{
                bg: 'gray.100',
                boxShadow: 'inner',
                transitionDuration: '0.5s',
                cursor: "pointer"
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