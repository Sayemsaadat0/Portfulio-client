import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footar from "../../Pages/Shared/Footar/Footar";

const Main = () => {
    return (
        <div className="max-w-[1466px] bg-base-200  mx-auto px-1 md:px-4">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;