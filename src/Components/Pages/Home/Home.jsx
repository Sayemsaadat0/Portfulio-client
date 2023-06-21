import Container from "../Shared/Container/Container";
import Banner from "./Banner";
import MySkills from "./MySkills/MySkills";
import Service from "./Service/Service";

const Home = () => {
    return (
        <Container>
            <Banner></Banner> 
            <MySkills></MySkills>
            <Service></Service>
        </Container>
    );
};

export default Home;