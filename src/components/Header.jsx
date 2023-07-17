import {Avatar, Flex, Text} from '@chakra-ui/react'
import NTUlogo from '@/image/NTUlogo.png'

const Header = () => {
    return (
        <Flex align = "center">
            <div>
                <Avatar width = '96px'  src={NTUlogo}/>
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

            </div>
        </Flex>
    )
}
export default Header