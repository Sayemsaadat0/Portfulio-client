import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footar from "../../Pages/Shared/Footar/Footar";

const Main = () => {
    return (
        <div className="font-mono">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footar></Footar>
        </div>
    );
};

export default Main;