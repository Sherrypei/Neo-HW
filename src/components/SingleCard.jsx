import {Card, CardBody, Stack, Text, Flex, CardHeader, CardFooter, HStack} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";

const SingleCard = ({info}) => {
    const {zhTitle, enTitle, zhName, enName, zhUnit, enUnit, email, phone} = info;
    return (
        <Stack w="35%" spacing="20px">
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
                </CardBody>
                <CardFooter flexDir="column">
                    <HStack color="#733236">
                        <EmailIcon/>
                        <Text fontSize="12px">{email}</Text>
                    </HStack>
                    <HStack color="#733236">
                        <PhoneIcon/>
                        <Text fontSize="12px">{phone}</Text>
                    </HStack>
                </CardFooter>


            </Card>
        </Stack>

    )
}
export default SingleCard
