import Marquee from "react-fast-marquee";

const MySkills = () => {
    return (
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-20 mb-10">
                <div className="flex justify-center">
                    <img className="ms-10" src="https://i.ibb.co/JnpzjMc/Service-I-Offer.png" alt="" />
                </div>
                <div className="mt-10">
                    <Marquee speed={200}>
                        <img className="mx-6 p-5" src="https://i.ibb.co/6H75Jwy/1.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/HXx62QG/2.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/s90SwNx/7.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/pW0Rg4m/Bootstrap.png"/>
                        <img className="mx-6 p-5" src="https://i.ibb.co/j3MHCFH/3.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/GJ0MjB9/4.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/71SH1z9/5.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/MCyRqgv/6.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/9WgRgFD/8.png" alt="" />
                        <img className="mx-6 p-5" src="https://i.ibb.co/zxxVsTj/9.png" alt="" />
                    </Marquee>
                </div>
            </div>
    );
};

export default MySkills;