import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Errorpage/ErrorPage";
import AboutMe from "../Pages/AboutMe/AboutMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage> </ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'aboutme',
                element: <AboutMe></AboutMe>
            }
        ]

    },
]);


export default router

















/* 

   <Link  to='/'
      className="hover:underline hover:scale-105 
      duration-300 hover:font-semi-bold 
      p-2 bg-black text-white hover:bg-white
     hover:text-black">Home</Link>

      <Link  to='/aboutme'
      className="hover:underline hover:scale-105 
      duration-300 hover:font-semi-bold 
      p-2 bg-black text-white hover:bg-white
     hover:text-black">About Me</Link>
    
      <Link className="hover:underline hover:scale-105 duration-300 hover:font-semi-bold p-2
      bg-black text-white hover:bg-white  hover:text-black">Projects</Link>
    
      <Link className="hover:underline hover:scale-105 duration-300 hover:font-semi-bold  p-2
      bg-black text-white hover:bg-white  hover:text-black">Download Resume</Link>
*/