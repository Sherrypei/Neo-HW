import {Flex} from "@chakra-ui/react";
import Header from "@/components/Header.jsx";
import InfoCard from "@/container/InfoCard.jsx";
import Announcement from "@/container/Announcement.jsx";
import Note1 from "@/components/Note1.jsx";
import Note2 from "@/components/Note2.jsx";
import Footer from "@/components/Footer.jsx";
import {Form} from "@chakra-ui/theme/components";



const HomePage = () =>{
    return (
        <Flex w="100vw" flexDir={"column"}>
            <Header/>
            <Announcement/>
            <Note1/>
            <InfoCard/>
            <Note2/>
            <Footer/>
        </Flex>
    )
}

export default HomePage;