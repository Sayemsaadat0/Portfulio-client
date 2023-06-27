import Container from "../Shared/Container/Container";
import Banner from "./Banner";
import ContactUs from "./ContactUs/ContactUs";
import Service from "./Service/Service";
import Skills from "./Skills/Skills";

const Home = () => {
    return (
        <Container>
            <Banner></Banner> 
            <Skills></Skills>
            <Service></Service> 
            <ContactUs></ContactUs>
        </Container>
    );
};

export default Home;