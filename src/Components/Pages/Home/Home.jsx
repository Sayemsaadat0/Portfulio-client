import App from "../../../App";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import Portfulio from "../Portfulio/Portfulio";
const Home = () => {
    return (
        <>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Portfulio></Portfulio>
            </section>
            <section>
                <ContactUs></ContactUs>
            </section>
            <section>
                <App></App>
            </section>
        </>
    );
};

export default Home;