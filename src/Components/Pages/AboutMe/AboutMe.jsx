const AboutMe = () => {
    return (
        <div className="max-w-[1440px] h-full mx-auto">
            <img className="w-full" src="https://i.ibb.co/ZH9Zp52/About-Me-1.gif" alt="" />

            {/* CARD  */}
            <div className="card  mx-auto lg:card-side hover:bg-slate-100 duration-300  mt-20 mb-10 ">
                <div className="w-full">
                    <img className="h-96  mx-auto " src="https://i.ibb.co/ynbQQbc/Untitled-design-3.png" alt="Album" />
                </div>
                <div className="card-body ">
                    <h3 className="text-xl font-bold ">Hello! I am  Sayem Saadat</h3>
                    <p className=" ">
                        A junior web developer passionate about creating engaging and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I enjoy turning design concepts into functional and visually appealing digital experiences.
                        <br />
                        I love learning new things and working with experienced professionals to improve my skills.
                        <br />
                        Even though I am early in my career, I see challenges as opportunities to grow. I always strive to improve and deliver high-quality work.
                    </p>
                    <div className="card-actions justify-start">
                        < button
                            className="s_button w-60 relative right-0">Download Resume</button>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default AboutMe;