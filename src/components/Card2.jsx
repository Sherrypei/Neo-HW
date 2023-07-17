import {Card, CardBody, Stack, Text, Flex} from "@chakra-ui/react";


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
                <CardBody>
                    <div>
                        <Text>陳思瑋 組員<br/></Text>
                        <Text>Mr. Chen Sih-Wei</Text>
                    </div>
                    <Text align={"right"}>僑生及陸生輔導組<br/>
                        Overseas Student Advising Division</Text>
                    <div>
                        <Text>chensihwei@ntu.edu.tw<br/></Text>
                        <Text>(02) 3366-3232 ext 15</Text>
                    </div>

                </CardBody>
            </Card>
        </Stack>

    )
}
export default Card2
