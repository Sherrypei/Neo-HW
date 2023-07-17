import Card1 from "@/components/Card1.jsx";
import Card2 from "@/components/Card2.jsx";
import Card3 from "@/components/Card3.jsx";
import Card4 from "@/components/Card4.jsx";
import {SimpleGrid} from "@chakra-ui/react";
const InfoCard = () => {
    return (
    <SimpleGrid /*spacing={4} templateColumns='repeat(auto-fill, 500px)'*/>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
    </SimpleGrid>
)
}

export default InfoCard