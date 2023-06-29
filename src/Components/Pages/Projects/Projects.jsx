import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

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
                        <img src="https://i.ibb.co/BcGdgPx/landscape1.png" alt="Shoes" />

                        <div className="card-body bg-black shadow-lg shadow-white">
                            <h2 className="card-title">Job Hunters</h2>
                            <p>Jobhunters is a front-end website that helps job seekers find their dream jobs. The website offers a comprehensive database of job listings, including full-time, part-time</p>
                            <div className="card-actions end">
                                <Link to='https://golden-sunburst-4aac7f.netlify.app/' target="_blank" className="s_button">Live site</Link>
                                <Link to='https://github.com/Sayemsaadat0/Job-Hunters' target="_blank" className="s_button">Codes</Link>
                            </div>
                        </div>

                    </div>
                    {/* card2 */}
                    <div className="card card-compact  shadow-xl">
                        <img src="https://i.ibb.co/G0N7DY3/landscape2.png" alt="Shoes" />

                        <div className="card-body bg-black shadow-lg shadow-white">
                            <h2 className="card-title">KawaiiKorner</h2>
                            <p>Kawaii Korner is a website where parents can buy kawaii toys for their children. The website offers a wide variety of toys, including stuffed animals, dolls, figurines, and more. </p>
                            <div className="card-actions end">
                                <Link to='https://kawaiikorner-e8b83.web.app/' target="_blank" className="s_button">Live site</Link>
                                <Link to='https://github.com/Sayemsaadat0/kawaiikorner-client/tree/main' target="_blank" className="s_button">Client side code</Link>
                                <Link to='https://github.com/Sayemsaadat0/kawaiikorner-server' target="_blank" className="s_button">Server Side code</Link>
                            </div>
                        </div>

                    </div>

                    {/* card3 */}
                    <div className="card card-compact   shadow-xl ">
                        <img src="https://i.ibb.co/xGDf00w/landscape3.png" alt="Shoes" />

                        <div className="card-body bg-black shadow-lg shadow-white">
                            <h2 className="card-title">Musicits</h2>
                            <p>Musicits is a website where people can buy courses on learning musical instruments. The website offers a wide variety of courses, from beginner to advanced levels, and covers all major instruments. All of the courses on Musicits are taught by experienced musicians, and they are designed to be both informative and engaging.</p>
                            <div className="card-actions end">
                                <Link target="_blank" to='https://musicits.web.app/' className="s_button">Live site</Link>
                                <Link target="_blank" to='https://github.com/Sayemsaadat0/musicits-client' className="s_button">Client side code</Link>
                                <Link  target="_blank" to='https://github.com/Sayemsaadat0/musicits-server' className="s_button">Server Side code</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </Slide>


        </div>
    );
};

export default Projects;

/* 
 */