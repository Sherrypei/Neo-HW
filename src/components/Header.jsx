import {Avatar, Center, Flex, Text} from '@chakra-ui/react'
import NTUlogo from '@/image/NTUlogo.png'

const Header = () => {
    return (
        <Flex flexDir="column" gap="20px">
            <Center>
                <Avatar width="96px" height="96px" src={NTUlogo}/>
            </Center>
            <div>
                <Text align="center" fontSize="20px">
                    國立臺灣大學<br></br>
                    華語文及英文能力測驗
                </Text>
                <Text align="center" fontSize="14px">
                    National Taiwan University<br></br>
                    Chinese and English Proficiency Test
                </Text>
            </div>

        </Flex>
    )
}
export default Header