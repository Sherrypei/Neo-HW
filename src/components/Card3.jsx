import {Card, CardBody, Stack, Text, Flex} from "@chakra-ui/react";

const Card3 = () => {
    return (
        <Stack>
            <Text align="center" fontSize="14px">
                華語文補考編班<br/>
            </Text>
            <Text align="center" fontSize="12px">
                For Freshman Chinese Make-up Exam/ Placement
            </Text>
            <Card>
                <CardBody>
                    <div>
                        <Text>張怡茵 助教<br/></Text>
                        <Text>Ms. Chang Yi-Ying</Text>
                    </div>

                    <Text align={"right"}>中文系<br/>
                        Department of Chinese Literature</Text>
                    <div>
                        <Text>yiyin747@ntu.edu.tw<br/></Text>
                        <Text>(02) 3366-4005<br/></Text>
                    </div>

                </CardBody>
            </Card>
        </Stack>

    )
}
export default Card3
