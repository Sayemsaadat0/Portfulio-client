import { Slide } from "react-awesome-reveal";

const Projects = () => {





    return (
        <div className="max-w-[1440px] h-full mx-auto">
            <Slide direction="right">
                <img className="w-full" src="https://i.ibb.co/Wv0jztV/About-Me.gif" alt="" />
            </Slide>

            <Slide>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 mb-10 mx-auto items-center">
                    {/* card1 */}
                    <div className="card card-compact   shadow-xl">
                        <img src="https://i.ibb.co/KD5SH79/screencapture-golden-sunburst-4aac7f-netlify-app-2023-06-29-00-24-53.png" alt="Shoes" />

                        <div className="card-body bg-black shadow-lg shadow-white">
                            <h2 className="card-title">Job Hunters</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions end">
                                <button className="s_button">Live site</button>
                                <button className="s_button">Codes</button>
                            </div>
                        </div>

                    </div>
                    {/* card2 */}
                    <div className="card card-compact  shadow-xl">
                        <img src="https://i.ibb.co/0cBW79G/screencapture-localhost-5174-2023-06-28-23-55-29.png" alt="Shoes" />

                        <div className="card-body bg-black shadow-lg shadow-white">
                            <h2 className="card-title">KawaiiKorner</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions end">
                                <button className="s_button">Live site</button>
                                <button className="s_button">Client side code</button>
                                <button className="s_button">Server Side code</button>
                            </div>
                        </div>

                    </div>

                    {/* card3 */}
                    <div className="card card-compact   shadow-xl ">
                        <img src="https://i.ibb.co/YkMQ9cs/screencapture-musicits-web-app-2023-06-28-23-36-44.png" alt="Shoes" />

                        <div className="card-body bg-black shadow-lg shadow-white">
                            <h2 className="card-title">Musicits</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions end">
                                <button className="s_button">Live site</button>
                                <button className="s_button">Client side code</button>
                                <button className="s_button">Server Side code</button>
                            </div>
                        </div>

                    </div>
                </div>

            </Slide>


        </div>
    );
};

export default Projects;

/* https://i.ibb.co/KD5SH79/screencapture-golden-sunburst-4aac7f-netlify-app-2023-06-29-00-24-53.png
https://i.ibb.co/0cBW79G/screencapture-localhost-5174-2023-06-28-23-55-29.png
https://i.ibb.co/YkMQ9cs/screencapture-musicits-web-app-2023-06-28-23-36-44.png
 */