import {Card, CardBody, Stack, Text, Flex, CardHeader, CardFooter} from "@chakra-ui/react";

const SingleCard = ({info}) => {
    const {zhTitle, enTitle, zhName, enName, zhUnit, enUnit, email, phone} = info;
    return (
        <Stack>
            <Text align="center" fontSize="14px">
                {zhTitle}
            </Text>
            <Text align="center" fontSize="12px">
                {enTitle}
            </Text>
            <Card>
                <CardHeader>
                    <Text fontSize="18px">{zhName}</Text>
                    <Text fontSize="14px">{enName}</Text>
                </CardHeader>
                <CardBody>
                    <Text align={"right"} fontSize="16.8px">{zhUnit}
                        {enUnit}</Text>
                </CardBody>
                <CardFooter>
                    <Text fontSize="12px" color="#733236">{email}</Text>
                    <Text fontSize="12px" color="#733236">{phone}</Text>
                </CardFooter>
            </Card>
        </Stack>

    )
}
export default SingleCard
