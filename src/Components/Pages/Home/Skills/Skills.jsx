import Container from "../../Shared/Container/Container";
const Skills = () => {
    return (
        <Container>
            <div className="mt-20 max-w-[1440px] h-full mx-auto ">
                <h3 className="text-center text-4xl font-bold underline uppercase">Stuff I am Good at!</h3>

                <div className=" grid grid-cols-2  lg:grid-cols-4 gap-20 mt-20 font-bold">
                    <div className="skill card1">
                        <img className="img-box" src="https://i.ibb.co/brmpS2V/1.png" alt="" />
                        <div className="content">
                            <p >Javascript</p>
                        </div>
                    </div>

                    <div className="skill card1">
                        <img className="img-box" src="https://i.ibb.co/6wYC4v3/2.png" alt="" />
                        <div className="content">
                            <p >React js</p>
                        </div>
                    </div>

                    <div className="skill card1 ">
                        <img className="img-box" src="https://i.ibb.co/HdDcdRq/3.png" alt="" />
                        <div className="content">
                            <p >Node js</p>
                        </div>
                    </div>

                    <div className="skill card1">
                        <img className="img-box" src="https://i.ibb.co/LdKVV1V/4.png" alt="" />
                        <div className="content">
                            <p >firebase</p>
                        </div>
                    </div>

                    <div className="skill card1">
                        <img className="img-box" src="https://i.ibb.co/JxpWjmZ/5.png" alt="" />
                        <div className="content">
                            <p >MongoDB</p>
                        </div>
                    </div>

                    <div className="skill card1">
                        <img className="img-box " src="https://i.ibb.co/YPfCh7r/Bootstrap.png" alt="" />
                        <div className="content">
                            <p >Express js</p>
                        </div>
                    </div>

                    <div className="skill card1">
                        <img className="img-box" src="https://i.ibb.co/tL90hwC/7.png" alt="" />
                        <div className="content">
                            <p >Tailwind</p>
                        </div>
                    </div>
                    <div className="skill card1">
                        <img className="img-box" src="https://i.ibb.co/HV3J7Pg/8.png" alt="" />
                        <div className="content">
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Skills;





















