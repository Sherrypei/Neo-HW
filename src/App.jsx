import HomePage from "@/container/HomePage.jsx";
import {Flex, useMediaQuery} from "@chakra-ui/react";


const App = () => {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    return (
        <Flex py="120px" justifyContent="center" px={isMobile ? "19px" : "0px"}>

            <HomePage/>

        </Flex>
    )
}
export default App;