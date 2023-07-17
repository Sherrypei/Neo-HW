import {Avatar, Flex, Text} from '@chakra-ui/react'
import NTUlogo from '@/image/NTUlogo.png'

const Header = () => {
    return (
        <Flex>
            <stack spacing={3}>
                <Avatar size='4xs' src={NTUlogo}/>
                <Text>
                    國立臺灣大學<br></br>
                    華語文及英文能力測驗
                </Text>
                <Text>
                    National Taiwan University<br></br>
                    Chinese and English Proficiency Test
                </Text>
            </stack>
        </Flex>
    )
}
export default Header