
const About = () => {
    return (
        <div id='about' className="flex flex-col-reverse w-full px-2 lg:flex-row justify-center items-start md:items-center py-20 ">
            {/* left */}
            <div className="md:w-1/2 card ">
                {/* skills */}
                <div>
                    <h2 className="text-3xl tracking-widest">Stuff I Am Good At</h2>
                    <div className="list-disc mx-10 md:flex gap-20 py-6 text-xl">
                        <div>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                        </div>
                        <div>

                            <li>Javascript</li>
                            <li>React Js</li>
                            <li>Next Js</li>
                        </div>
                        <div>
                            <li>Node js</li>
                            <li>Express Js</li>
                            <li>Firebase</li>
                            <li>Mongodb</li>
                        </div>
                    </div>
                </div>

            </div>
            {/* right */}
            <div className="md:w-1/2 card text-center md:text-left pb-10">
                <h2 className="text-3xl tracking-widest pb-4">About Me</h2>
                <div>
                    <p>   I am Abu Saadat Md. Sayem, a front-end developer. I am passionate about building user-friendly and visually appealing web experiences. <br />
                        I have a strong foundation in HTML, CSS, and JavaScript, and I am proficient in using popular front-end frameworks like React and Next js.</p>
                    <br />
                    <p>I am a highly motivated and quick learner, and I am always eager to take on new challenges. I am also a team player and I am always willing to help others. I am confident that I have the skills and experience necessary to be a valuable asset to any project.</p>
                </div>
            </div>
        </div>
    );
};

export default About;