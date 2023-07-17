import {Card, CardBody, Stack, Text, Flex, CardHeader, CardFooter} from "@chakra-ui/react";


const Card2 = () => {
    return (
        <Stack>
            <Text align="center" fontSize="14px">
                僑生<br/>
            </Text>
            <Text align="center" fontSize="12px">
                For Oversea Chinese Students
            </Text>
            <Card>
                <CardHeader>
                    <Text fontSize="18px">陳思瑋 組員<br/></Text>
                    <Text fontSize="14px">Mr. Chen Sih-Wei</Text>
                </CardHeader>
                <CardBody>
                    <Text align={"right"} fontSize="16.8px">僑生及陸生輔導組<br/>
                        Overseas Student Advising Division</Text>
                </CardBody>
                <CardFooter>
                    <Text fontSize="12px">chensihwei@ntu.edu.tw<br/></Text>
                    <Text fontSize="12px">(02) 3366-3232 ext 15</Text>
                </CardFooter>
            </Card>
        </Stack>

    )
}
export default Card2
