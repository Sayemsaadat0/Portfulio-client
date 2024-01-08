import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footar from "../../Pages/Shared/Footar/Footar";

const Main = () => {
    return (
        <div className="max-w-[1366px] mx-auto relative">
            <div className="fixed right-10 top-[calc(100vh-100px)] z-10">
                <a href="https://wa.me/01521574741">
                    <img
                        src="https://img.icons8.com/color/48/000000/whatsapp.png"
                        alt="whatsapp"
                    />
                </a>
            </div>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footar></Footar>
        </div>
    );
};

export default Main;