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
      
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-20 mb-10 ">
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
                                        {...register("name", { required: true })} />
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
                                className="s_button w-full"
                                type="submit">Submit</button>
                            </div>

                        </form>

                    </div>
                    {/* right side */}
                    <div className="w-full md:w-full lg:w-[50%] mx-auto flex flex-col items-center text-center font-bold text-xl mt-4">
                    <h3 className="text-center text-4xl font-bold underline uppercase">contact us</h3>
                        <h4 className="mt-4 uppercase text-2xl">Get in touch</h4>
                        <p className="mt-2">Hey! we are looking forward to start a project with you! <br />
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
                <div className="flex justify-center mt-10 gap-10 text-5xl social-links">
                    <Link 
                    className="social-btn flex-center">
                    <FaFacebook></FaFacebook>
                    <span 
                    className="text-sm">Facebook</span>
                    </Link>
                    
                    <Link 
                    className="social-btn flex-center">
                    <FaGithub></FaGithub> 
                    <span 
                    className="text-sm">Github</span>
                    </Link>
                    
                    <Link 
                    className="social-btn flex-center">
                    <FaLinkedinIn></FaLinkedinIn>
                    <span 
                    className="text-sm">Linkdin</span>
                    </Link>
             
                </div>
            </div>
    
    );
};

export default ContactUs;