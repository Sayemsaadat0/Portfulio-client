import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footar from "../../Pages/Shared/Footar/Footar";

const Main = () => {
    return (
        <div className="max-w-[1366px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;