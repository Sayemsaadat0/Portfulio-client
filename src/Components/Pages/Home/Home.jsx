import { BsArrowRight } from "react-icons/bs";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-4 py-10">
                {/* image */}
                <div className="w-44 rounded-xl shadow-lg overflow-hidden">
                    <img className="duration-700  hover:scale-105" src="/sayem.png" alt="" />
                </div>

                <div className="w-44 h-44 rounded-xl bg-white shadow-lg md:border p-4">
                    <p className="text-gray-500 border-b-2 ">
                        mode
                    </p>
                    <p className="">
                        Open for Design Business or any jobs.
                    </p>
                    <div className='flex gap-1 group items-center underline'>
                        <a download={true} href="/resume.pdf">Get In Touch</a>
                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                    </div>
                </div>


                <div className="rounded-xl bg-white shadow-lg  p-4 border col-span-2">
                <p className="text-gray-500 border-b-2 ">
                        mode
                    </p>
                </div>










                <div className="w-36 h-36 border border-black col-span-2 row-span-2">div4</div>
                <div className="w-36 h-36 border border-black col-span-2 row-span-2">div5</div>
                <div className="w-36 h-36 border border-black col-span-2">div6</div>
                <div className="w-36 h-36 border border-black col-span-2 row-span-2">div7</div>
                <div className="w-36 h-36 border border-black col-span-2">div8</div>
                <div className="w-36 h-36 border border-black">div9</div>
                <div className="w-36 h-36 border border-black">div10</div>
                <div className="w-36 h-36 border border-black">div11</div>
                <div className="w-36 h-36 border border-black">div12</div>

            </div>
        </div>
    );
};

export default Home;