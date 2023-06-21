import Container from "../Shared/Container/Container";
import Banner from "./Banner";
import ContactUs from "./ContactUs/ContactUs";
import MySkills from "./MySkills/MySkills";
import Service from "./Service/Service";

const Home = () => {
    return (
        <Container>
            <Banner></Banner> 
            <MySkills></MySkills>
            <Service></Service> 
            <ContactUs></ContactUs>
        </Container>
    );
};

export default Home;