
const AboutMe = () => {
    return (
        <div className="max-w-[1440px] h-full mx-auto">
            <img className="w-full" src="https://i.ibb.co/ZH9Zp52/About-Me-1.gif" alt="" />

            {/* CARD  */}
            <div className="card w-[70%] mx-auto lg:card-side  hover:scale-110 duration-500 mt-20 mb-20">
                <div className="card-body">
                    <h3 className="text-xl font-bold">Hello! I am  Sayem Saadat,</h3>
                    <p className="text-left w-[75%]">
                        A junior web developer passionate about creating engaging and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I enjoy turning design concepts into functional and visually appealing digital experiences.
                        <br />
                        I love learning new things and working with experienced professionals to improve my skills.
                        <br />
                        Even though I am early in my career, I see challenges as opportunities to grow. I always strive to improve and deliver high-quality work.


                    </p>
                </div>
                <img className="h-full" src="https://i.ibb.co/fr7bcPr/Studio.png" alt="Album" />
            </div>
        </div>
    );
};

export default AboutMe;