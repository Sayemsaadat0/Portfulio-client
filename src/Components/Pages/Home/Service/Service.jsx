import { Slide  } from "react-awesome-reveal";
const Service = () => {
    return (
        <Slide direction="right">

        
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-20 mb-10h-screen">
            <div className="lg:flex justify-between ">
                <div className="w-full md:w-full lg:w-[50%] ">
                    <h3 className=" text-4xl font-bold  underline uppercase ">Service I offer</h3>
                    <p className=" mt-5   lg:w-[80%] mb-5">--- As a front-end designer with expertise in HTML, CSS, JavaScript, React, Express, Node, and various frameworks, I offer a range of services aimed at delivering exceptional user experiences. Here is a breakdown of the services I provide:</p>

                    <img src="https://i.ibb.co/r3snP7k/Untitled-design.gif" alt="" />
                </div>

                {/* right */}

                <div className="lg:grid grid-cols-2 w-full lg:w-1/2 gap-10 mt-5 lg:ms-5 mx-auto ">
                    <div 
                       className="card service_card w-[80%] md:w-full mx-auto h-auto flex justify-center items-center mb-5 lg:mb-0 hover:bg-black hover:text-white duration-500">
                        <h3 className="text-3xl font-bold ms-5">Front-End Development</h3>
                        <p className="ms-5 mt-4">---With a deep understanding of JavaScript and front-end frameworks like React, I transform designs into fully functional and interactive web applications..</p>
                    </div>

                    <div className="card  w-[80%] md:w-full mx-auto service_card h-auto flex justify-center items-center mb-5 lg:mb-0 row-span-2 hover:bg-black hover:text-white duration-500">
                        <h3 className="text-3xl font-bold ms-5">User Interface (UI) Design</h3>
                        <p className="ms-5 mt-4">---Through meticulous attention to typography, color palettes, and layout, I design interfaces that are not only aesthetically pleasing but also enhance usability and overall user satisfaction.</p>
                    </div>

                    <div className="card  service_card w-[80%] md:w-full mx-auto h-auto flex justify-center items-center mb-5 lg:mb-0 row-span-2 hover:bg-black hover:text-white duration-500">
                        <h3 className="text-3xl font-bold ms-5">Responsive Web Design</h3>
                        <p className="ms-5 mt-4">---Harnessing the power of HTML, CSS, and JavaScript, I create visually appealing and fully responsive websites.</p>
                    </div>

                    <div className="card  service_card w-[80%] md:w-full mx-auto h-auto flex justify-center items-center mb-5 lg:mb-0 hover:bg-black hover:text-white duration-500">
                        <h3 className="text-3xl font-bold ms-5">Website Maintenance <br /> and Support</h3>
                        <p className="ms-5 mt-4">---From bug fixes to content updates, I am dedicated to keeping your website running smoothly.</p>
                    </div>
                </div>
            </div>
        </div>
        </Slide >
    );
};

export default Service;