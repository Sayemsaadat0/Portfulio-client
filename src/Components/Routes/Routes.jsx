import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import AboutMe from "../Pages/AboutMe/AboutMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement : <ErrorPage> </ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'aboutme',
                element : <AboutMe></AboutMe>
            }
        ]

    },
]);


export default router