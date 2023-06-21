import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Errorpage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <ErrorPage> </ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]

    },
]);


export default router