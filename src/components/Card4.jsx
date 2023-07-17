import {Card, CardBody, Stack, Text, Flex} from "@chakra-ui/react";


const Card4 = () => {
    return (
        <Stack>
            <Text align="center" fontSize="14px">
                英文免修/補考/編班<br/>
            </Text>
            <Text align="center" fontSize="12px">
                For Freshman English Waiving/Make-up/ Placement
            </Text>
            <Card>
                <CardBody>
                    <div>
                        <Text fontSize="18px">李欣平 & 陳亭吟 助教<br/></Text>
                        <Text fontSize="14px">Ms. Magen Lee & Ms. Cindy Chen</Text>

                    </div>
                    <Text align={"right"} fontSize="16.8px">外文系<br/>
                        Department of Foreign Languages and Literatures</Text>
                    <div>
                        <Text fontSize="12px">cindychen@ntu.edu.tw<br/></Text>
                        <Text fontSize="12px">(02) 3366-3219<br/></Text>
                    </div>

                </CardBody>
            </Card>
        </Stack>

    )
}
export default Card4
