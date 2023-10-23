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

        <div className="max-w-[1440px] mx-auto ">
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
                                    className="input  w-full shadow-md "
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
                                    className="input  w-full shadow-md "
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
                                className="input  w-full shadow-md "
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
                                className="textarea h-44   w-full shadow-md "
                                name="message"
                                placeholder="Message"
                                {...register("message", { required: true })}></textarea>
                        </div>

                        <div className="flex justify-center mt-4 ">
                            <button
                                className="s_button w-full "
                                type="submit">Send Message</button>
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

        </div>
    );
};

export default ContactUs;