import { Outlet } from "react-router-dom";
// import Navbar from "../../Pages/Shared/Navbar/Navbar";
// import Footar from "../../Pages/Shared/Footar/Footar";

const Main = () => {
    return (
        <div className=" mx-auto px-1 md:px-4 relative">
            <div className="fixed right-6 xl:right-10 bottom-4 xl:top-[calc(100vh-100px)] z-10">
                <a href="https://wa.me/+8801521574741">
                    <img
                        src="https://img.icons8.com/color/48/000000/whatsapp.png"
                        alt="whatsapp"
                    />
                </a>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;