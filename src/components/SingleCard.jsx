import {Card, CardBody, CardFooter, HStack, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons";

const SingleCard = ({info}) => {
    const {zhTitle, enTitle, zhName, enName, zhUnit, enUnit, email, phone} = info;
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
        <Stack w={isMobile ? "100%" : "40%"} spacing="20px">
            <div>
                <Text align="center" fontSize="14px">
                    {zhTitle}
                </Text>
                <Text align="center" fontSize="12px">
                    {enTitle}
                </Text>
            </div>

            <Card shadow="lg" _hover={{
                cursor: "pointer"
            }}>
                <CardBody>
                    <Text fontSize="18px"><b>{zhName}</b></Text>
                    <Text fontSize="14px"><b>{enName}</b></Text>
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
