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
                        <Text fontSize="18px">張怡茵 助教<br/></Text>
                        <Text fontSize="14px">Ms. Chang Yi-Ying</Text>
                    </div>

                    <Text align={"right"} fontSize="16.8px">中文系<br/>
                        Department of Chinese Literature</Text>
                    <div>
                        <Text fontSize="12px">yiyin747@ntu.edu.tw<br/></Text>
                        <Text fontSize="12px">(02) 3366-4005<br/></Text>
                    </div>

                </CardBody>
            </Card>
        </Stack>

    )
}
export default Card3
