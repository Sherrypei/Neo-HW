import {Card, CardBody, Stack, Text, Flex} from "@chakra-ui/react";


const Card2 = () => {
    return (
        <Stack>
            <Text align="center" fontSize="14px">
                國際學生<br/>
            </Text>
            <Text align="center" fontSize="12px">
                For International Students
            </Text>
            <Card>
                <CardBody>
                    <div>
                        <Text fontSize="18px">徐慧玲 專員<br/></Text>
                        <Text fontSize="14px">Ms. Lily Hsu</Text>
                    </div>
                    <Text align={"right"} fontSize="16.8px">國際事務處<br/>
                        Office of International </Text>
                    <div>
                        <Text fontSize="12px">lilyhsup87@ntu.edu.tw<br/></Text>
                        <Text fontSize="12px">(02) 3366-2007 ext. 206</Text>
                    </div>

                </CardBody>
            </Card>
        </Stack>

    )
}
export default Card2
