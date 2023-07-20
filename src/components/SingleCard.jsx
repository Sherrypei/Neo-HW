import {Card, CardBody, Stack, Text, Flex, CardHeader, CardFooter} from "@chakra-ui/react";

const SingleCard = ({info}) => {
    const {zhTitle, enTitle, zhName, enName, zhUnit, enUnit, email, phone} = info;
    return (
        <Stack w="35%" >
            <Text align="center" fontSize="14px">
                {zhTitle}
            </Text>
            <Text align="center" fontSize="12px">
                {enTitle}
            </Text>
            <Card>
                <CardBody>
                    <Text fontSize="18px">{zhName}</Text>
                    <Text fontSize="14px">{enName}</Text>
                    <Text align={"right"} fontSize="16.8px" color="#808080">{zhUnit}
                        </Text>
                    <Text align={"right"} fontSize="16.8px" color="#808080">
                        {enUnit}
                    </Text>
                    <Text fontSize="12px" color="#733236">{email}</Text>
                    <Text fontSize="12px" color="#733236">{phone}</Text>
                </CardBody>

            </Card>
        </Stack>

    )
}
export default SingleCard
