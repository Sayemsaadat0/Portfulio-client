import Container from "../../Shared/Container/Container";
import { Slide  } from "react-awesome-reveal";
const Skills = () => {
    return (
        <Container>
            <Slide direction="left">

            <div className="mt-20 max-w-[1440px] h-full mx-auto ">
                <h3 className="text-center text-4xl font-bold underline uppercase ">Stuff I am Good at!</h3>

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className=" grid grid-cols-2  lg:grid-cols-4 gap-20 mt-20 font-bold ">
                    <div className="skill card1 hover:bg-yellow-500 ">
                        <img className="img-box w-full" src="https://i.ibb.co/1m6kt59/2.png" alt="" />
                        <div className="content">
                            <p className="text-black">Javascript</p>
                        </div>
                    </div>

                    <div className="skill card1 hover:bg-cyan-400">
                        <img className="img-box w-full" src="https://i.ibb.co/w0wzwFR/3.png" alt="" />
                        <div className="content">
                            <p className="text-black">React js</p>
                        </div>
                    </div>

                    <div className="skill card1 hover:bg-green-600">
                        <img className="img-box w-full" src="https://i.ibb.co/LRqq5VW/4.png" alt="" />
                        <div className="content">
                            <p >Node js</p>
                        </div>
                    </div>

                    <div className="skill card1 hover:bg-yellow-400">
                        <img className="img-box w-full" src="https://i.ibb.co/XY4ms9W/5.png" alt="" />
                        <div className="content">
                            <p className="text-black">firebase</p>
                        </div>
                    </div>

                    <div className="skill card1 hover:bg-green-400">
                        <img className="img-box w-full" src="https://i.ibb.co/8dv7pD8/6.png" alt="" />
                        <div className="content">
                            <p className="text-black">MongoDB</p>
                        </div>
                    </div>

                    <div className="skill card1 hover:bg-black">
                        <img className="img-box w-full"  src="https://i.ibb.co/TRg9WJg/1.png" alt="" />
                        <div className="content">
                            <p >Express js</p>
                        </div>
                    </div>

                    <div className="skill card1 hover:bg-gradient-to-tr from-cyan-500 to-cyan-200">
                        <img className="img-box w-full" src="https://i.ibb.co/1KhG9Jf/8.png
" alt="" />
                        <div className="content">
                            <p>Tailwind</p>
                        </div>
                    </div>
                    <div className="skill card1 hover:bg-gradient-to-tr from-purple-950 to-purple-800">
                        <img className="img-box w-full" src="https://i.ibb.co/2kw0WFZ/7.png" alt="" />
                        <div className="content">
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
        </Container>
    );
};

export default Skills;









/* 








*/