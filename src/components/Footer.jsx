import {Flex, Img, Text} from "@chakra-ui/react";
import ExperienceLogo from "@/image/Experience.svg"

const Footer=()=>{
    return (
        <Flex flexDir="column" gap="16px" alignItems="center">
            <Text align = "center" fontSize="12px">
                國立臺灣大學教務處資訊組 製作<br/>
                ©NTU-ACA-CIMD 2023
            </Text>
            <Img src={ExperienceLogo} w="178px"/>
        </Flex>

    )

}
export default Footer