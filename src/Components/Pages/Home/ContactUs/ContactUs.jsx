import { useForm } from "react-hook-form";
import {FaFacebook , FaGithub , FaLinkedinIn} from "react-icons/fa"
import { Link } from "react-router-dom";
const ContactUs = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data) 
        reset()
    };
    console.log(errors);
    return (
      
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-20 mb-10 border">
                <div className="lg:flex ">

                    {/* left side */}
                    <div className="flex flex-col  p-5">
                        <div>
                            <h3 className="text-center font-bold text-xl">Send A Message</h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="lg:flex gap-5">
                                {/* Name */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        className="input border-black w-full shadow-md shadow-black"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        {...register("yourname", { required: true })} />
                                </div>
                                {/* email */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        className="input border-black w-full shadow-md shadow-black"
                                        type="email"
                                        placeholder=" Enter Your Email"
                                        {...register("email", { required: true })} />
                                </div>
                            </div>
                            {/* subject */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                    Subject
                                    </span>
                                </label>
                                <input
                                    className="input border-black w-full shadow-md shadow-black"
                                    type="Subject"
                                    placeholder="Subject of Message"
                                    {...register("Subject", { required: true })} />
                            </div>
                            {/* textarea */}
                            <div>
                            <label className="label">
                                    <span className="label-text">
                                    Message
                                    </span>
                                </label>
                                <textarea 
                                className="textarea  border-black w-full shadow-md shadow-black" 
                                placeholder="Message"></textarea>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button 
                                className="hover:underline hover:scale-105 duration-300 hover:font-semi-bold p-2
                                bg-black text-white hover:bg-white  hover:text-black w-full"
                                type="submit">Submit</button>
                            </div>

                        </form>

                    </div>
                    {/* right side */}
                    <div className="w-full md:w-full lg:w-[50%] mx-auto flex flex-col items-center text-center font-bold text-xl mt-4">
                        <img className="ms-10 w-60" src="https://i.ibb.co/djft9Sf/3.png" alt="" /> 
                        <h4 className="mt-4 uppercase text-2xl">Get in touch</h4>
                        <p className="mt-2">Hey! we are looking forward to sartt a project with you! <br />
                        Feel free to reach out!</p> 

                        <p className="font-md mt-5">Name<br />
                         Sayem Saadat
                         </p>
                        <p className="font-md mt-5">Location<br />
                         Naogaon,Bangladesh
                         </p>
                        <p className="font-md mt-5">Email<br />
                         sayemsaadat0@gmail.com
                         </p>
                        <p className="font-md mt-5">Phone No.<br />
                         +8801521574741
                         </p>

                    </div>
                </div>


                {/* bottom links */}
                <div className="flex justify-center mt-10 gap-10 text-5xl">
                    <Link>
                    <FaFacebook className="hover:scale-110 duration-300"></FaFacebook>
                    </Link>
                    
                    <Link>
                    <FaGithub className="hover:scale-110 duration-300"></FaGithub> 
                    </Link>
                    
                    <Link>
                    <FaLinkedinIn className="hover:scale-110 duration-300"></FaLinkedinIn>
                    </Link>
             
                </div>
            </div>
    
    );
};

export default ContactUs;