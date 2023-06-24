import ProgressBar from "@ramonak/react-progress-bar";
const AboutMe = () => {
    return (
        <div className="max-w-[1440px] h-full mx-auto">
            <img className="w-full" src="https://i.ibb.co/ZH9Zp52/About-Me-1.gif" alt="" />

            {/* CARD  */}
            <div className="card lg:w-[70%] mx-auto lg:card-side  hover:scale-110 duration-500 mt-20 mb-10">
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

            {/* staff i am good at */}
            <div className="w-[70%] mx-auto">
                <h3 className="text-center text-4xl font-bold">Stuff I am Good at!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20">
                <ProgressBar bgColor="#343a40" completed={98} customLabel="HTML" />
              
                <ProgressBar bgColor="#343a40" completed={90} customLabel="CSS" />
              
                <ProgressBar bgColor="#343a40" completed={85} customLabel="Javascript(ES6)" />
              
                <ProgressBar bgColor="#343a40" completed={90} customLabel="React" />
              
                <ProgressBar bgColor="#343a40" completed={98} customLabel="Responsive Design" />
              
                <ProgressBar bgColor="#343a40" completed={95} customLabel="RESTfull API's" />
                
                <ProgressBar bgColor="#343a40" completed={95} customLabel="Front-End Frameworks"/>
              
                <ProgressBar bgColor="#343a40" completed={98} customLabel="Communication"/>
              
                <ProgressBar bgColor="#343a40" completed={98} customLabel="Adaptability"/>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;