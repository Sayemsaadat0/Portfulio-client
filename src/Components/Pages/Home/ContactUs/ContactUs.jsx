import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";






const ContactUs = () => {
    const [success, setSuccess] = useState(null);

    const form = useRef();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {

        emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
            .then((result) => {
                setSuccess(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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

                    <form  className="mb-5 text-black" ref={form} onSubmit={handleSubmit(onSubmit)}>

                        <div className="lg:flex gap-5">
                            {/* Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    className="input border-white w-full shadow-md shadow-white"
                                    type="text"
                                    name="name"
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
                                    className="input border-white w-full shadow-md shadow-white"
                                    type="email"
                                    name="email"
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
                                className="input border-white w-full shadow-md shadow-white"
                                type="text"
                                name="subject"
                                placeholder="Subject of Message"
                                {...register("subject", { required: true })} />
                        </div>
                        {/* textarea */}
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Message
                                </span>
                            </label>
                            <textarea
                                className="textarea h-44  border-white w-full shadow-md shadow-white"
                                name="message"
                                placeholder="Message"
                                {...register("message", { required: true })}></textarea>
                        </div>

                        <div className="flex justify-center mt-4 ">
                            <button
                                className="s_button w-full text-white"
                                type="submit">Submit</button>
                        </div>

                    </form>
                   <p className="mt-5">
                   {
                        success && "Your message has been sent. We'll get back to you soon!"
                    }
                   </p>
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
                <Link to='https://www.facebook.com/Bilatindur' target="_blank"
                    className="social-btn flex-center">
                    <FaFacebook className="ms-1"></FaFacebook>
                    <span
                        className="text-sm">Facebook</span>
                </Link>

                <Link to='https://github.com/Sayemsaadat0' target="_blank"
                    className="social-btn flex-center">
                    <FaGithub className="ms-1"></FaGithub>
                    <span
                        className="text-sm ">Github</span>
                </Link>

                <Link target="_blank" to='https://www.linkedin.com/in/abu-saadat-md-sayem-59236b281/'
                    className="social-btn flex-center ">
                    <FaLinkedinIn className="ms-2"></FaLinkedinIn>
                    <span
                        className="text-sm">Linkdin</span>
                </Link>

            </div>
        </div>
    );
};

export default ContactUs;