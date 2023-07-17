import {Card, CardHeader, CardBody, CardFooter, Text, Stack, SimpleGrid,} from '@chakra-ui/react'

const InfoCard = () => {
    return (
        <Stack>
            <Text>
                國際學生<br></br>
                For International Students
            </Text>
            <Card>
                <CardBody>
                    <Text>徐慧玲 專員<br></br></Text>
                    <Text>Ms. Lily Hsu</Text>

                    <Text>國際事務處<br></br>
                        Office of International Affairs</Text>
                    <Text>
                        lilyhsup87@ntu.edu.tw<br></br></Text>
                    <Text>(02) 3366-2007 ext. 206<br></br></Text>
                </CardBody>
            </Card>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card>
                    <CardBody>
                        <Text>徐慧玲 專員<br></br></Text>
                        <Text>Ms. Lily Hsu</Text>

                        <Text>國際事務處<br></br>
                            Office of International Affairs</Text>
                        <Text>
                            lilyhsup87@ntu.edu.tw<br></br></Text>
                        <Text>(02) 3366-2007 ext. 206<br></br></Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Text>徐慧玲 專員<br></br></Text>
                        <Text>Ms. Lily Hsu</Text>

                        <Text>國際事務處<br></br>
                            Office of International Affairs</Text>
                        <Text>
                            lilyhsup87@ntu.edu.tw<br></br></Text>
                        <Text>(02) 3366-2007 ext. 206<br></br></Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Text>徐慧玲 專員<br></br></Text>
                        <Text>Ms. Lily Hsu</Text>

                        <Text>國際事務處<br></br>
                            Office of International Affairs</Text>
                        <Text>
                            lilyhsup87@ntu.edu.tw<br></br></Text>
                        <Text>(02) 3366-2007 ext. 206<br></br></Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Text>徐慧玲 專員<br></br></Text>
                        <Text>Ms. Lily Hsu</Text>

                        <Text>國際事務處<br></br>
                            Office of International Affairs</Text>
                        <Text>
                            lilyhsup87@ntu.edu.tw<br></br></Text>
                        <Text>(02) 3366-2007 ext. 206<br></br></Text>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Stack>

    )
}

export default InfoCard