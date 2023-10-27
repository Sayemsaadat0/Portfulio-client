import App from "../../../App";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import Portfulio from "../Portfulio/Portfulio";
const Home = () => {
    return (
        <div>
            {/* hero title  */}
            <div className="py-5 md:flex justify-around">
                <div className="hidden md:block w-20 h-20 md:w-1/5">
                    this is left
                </div>
                <div className="w-full md:w-3/5 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold titleText  text-center  whitespace-nowrap">Abu Saadat Md. Sayem</h1>
                    <p>
                        A Frontend Developer
                    </p>
                </div>
                <div className="hidden md:block md:w-1/5">
                    this is right dgsdssadsdjsdskjdsjdkj
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Home;