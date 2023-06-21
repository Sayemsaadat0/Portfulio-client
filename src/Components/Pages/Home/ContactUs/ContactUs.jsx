import { Slide } from "react-awesome-reveal";
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <Slide direction="up">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 mt-20 mb-10">
                <div className="lg:flex  justify-between ">

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
                    <div className="w-full md:w-full lg:w-[50%] mx-auto">
                        <img className="ms-10" src="https://i.ibb.co/djft9Sf/3.png" alt="" />
                    </div>
                </div>


                {/* bottom links */}
                <div className="flex justify-center mt-10 gap-10">
                    <p>pup</p>
                    <p>pup</p>
                    <p>pup</p>
                </div>
            </div>
        </Slide>
    );
};

export default ContactUs;