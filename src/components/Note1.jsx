import {Text, Flex} from "@chakra-ui/react";

const Note1 = () => {
    return (
        <Flex flexDir="column" h="111px" justify="space-between">
            <div>
                <Text align="center" fontSize="14px"><b>
                    考生如有疑問，請洽下列單位人員<br/>
                </b></Text>
                <Text align="center" fontSize="12px"><b>
                    If you have any question, please contact
                </b></Text>
            </div>
            <div>
                <Text align="center" fontSize="12px">
                    點擊下方卡片寄送 email<br/>
                    Tap the cards below to send them email
                </Text>
            </div>
        </Flex>

    )
}
export default Note1