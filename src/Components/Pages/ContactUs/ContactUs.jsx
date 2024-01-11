/* import { useForm } from "react-hook-form";
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

        <div id="contact" className="w-full px-2">
            <div className="lg:flex justify-around ">

                <div className="md:w-1/2   mx-auto  mt-4">
                    <h2 className="text-3xl tracking-widest pb-4 text-center ">Get In Touch</h2>
                    <div className="font-bold  my-10 h-full">
                        <p className="mt-5">Name Sayem Saadat</p>
                        <p className="mt-5">Location Naogaon,Bangladesh</p>
                        <p className="mt-5">Email sayemsaadat0@gmail.com</p>
                        <p className="mt-5">Phone No. +8801521574741</p>
                        <div className="flex gap-10 py-10">
                            <a className="btn btn-outline  hover:bg-primary border-none" href="">Linkedin</a>
                            <a className="btn btn-outline  hover:bg-primary border-none" href="">Linkedin</a>
                            <a className="btn btn-outline  hover:bg-primary border-none" href="">Linkedin</a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-col md:w-1/2 p-5">
                    <div>
                        <h2 className="text-3xl tracking-widest pb-4 text-center ">Send A Message</h2>
                    </div>

                    <form className="mb-5 text-black" ref={form} onSubmit={handleSubmit(onSubmit)}>

                        <div className=" ">
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    className="input w-full  border"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    {...register("name", { required: true })} />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">
                                        Email
                                    </span>
                                </label>
                                <input
                                    className="input  w-full border"
                                    type="email"
                                    name="email"
                                    placeholder=" Enter Your Email"
                                    {...register("email", { required: true })} />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Subject
                                </span>
                            </label>
                            <input
                                className="input  w-full border "
                                type="text"
                                name="subject"
                                placeholder="Subject of Message"
                                {...register("subject", { required: true })} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">
                                    Message
                                </span>
                            </label>
                            <textarea
                                className="textarea h-44   w-full border"
                                name="message"
                                placeholder="Message"
                                {...register("message", { required: true })}></textarea>
                        </div>

                        <div className="flex justify-end mt-4 ">
                            <button
                                className="btn btn-neutral hover:bg-primary border-none  "
                                type="submit">Send Message</button>
                        </div>

                    </form>
                    <p className="mt-5">
                        {
                            success && "Your message has been sent. We'll get back to you soon!"
                        }
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ContactUs; */




import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";


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

        <div id="contact" className="w-full bg-white ">

            <form className="mt-5 text-black flex flex-col gap-2" ref={form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input  border-gray-300 w-full  "
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    {...register("name", { required: true })} />

                <input
                    className="input border-gray-300 w-full border"
                    type="email"
                    name="email"
                    placeholder=" Enter Your Email"
                    {...register("email", { required: true })} />

                <input
                    className="input border-gray-300 w-full border "
                    type="text"
                    name="subject"
                    placeholder="Subject of Message"
                    {...register("subject", { required: true })} />


                <textarea
                    className="textarea h-36  border-gray-300 w-full border"
                    name="message"
                    placeholder="Message"
                    {...register("message", { required: true })}></textarea>


                <div className='group flex '>
                    <button className='text-xs flex  bg-black text-white justify-center items-center gap-1  mt-3 rounded-full py-2 px-3 border '>Send Message
                        <BsArrowRight className='group-hover:translate-x-2 duration-700'></BsArrowRight>
                    </button>
                </div>

            </form>
            <p className="mt-5">
                {
                    success && "Your message has been sent successfully"
                }
            </p>

        </div>
    );
};

export default ContactUs;