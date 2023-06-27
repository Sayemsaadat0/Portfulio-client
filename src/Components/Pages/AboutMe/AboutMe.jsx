import { Slide } from "react-awesome-reveal";

const AboutMe = () => {
    return (
        <div className="max-w-[1440px] h-full mx-auto">
         <Slide direction="right">
         <img className="w-full" src="https://i.ibb.co/Y2YdZfv/About-Me-3.gif" alt="" />
         </Slide>

            {/* CARD  */}
            <Slide>
            <div className="card  mx-auto lg:card-side   mt-20 mb-10 ">
                <div className="lg:w-1/3">
                    <img className="h-96  mx-auto " src="https://i.ibb.co/N343QgG/Untitled-design-5.png" alt="Album" />
                </div>
                
                    <div className="card-body lg:w-2/3">
                        <h3 className="text-xl font-bold ">Hello! I am  Sayem Saadat,</h3>
                        <p className=" ">
                            A passionate and dedicated junior web developer who thrives on creating engaging and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I have the skills necessary to transform design concepts into functional and visually appealing digital experiences. <br />


                            Although I may be early in my career, I embrace challenges as opportunities for growth. I am not afraid to step out of my comfort zone and tackle new projects that push me to think creatively and problem-solve effectively.  <br />

                            Overall, I am a driven and ambitious individual who is committed to honing my craft and making a meaningful impact in the web development field. I am excited about the possibilities that lie ahead and look forward to the journey of becoming an experienced and proficient web developer.
                        </p>
                        <div className="card-actions justify-start">
                            < button
                                className="s_button w-60 relative right-0">Download Resume</button>
                        </div>

                    </div>
            </div>
                </Slide>


        </div>
    );
};

export default AboutMe;