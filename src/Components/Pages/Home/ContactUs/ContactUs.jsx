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
                    <div className="flex flex-col">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="lg:flex gap-10">
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        className="input border-black"
                                        type="text"
                                        placeholder="yourname"
                                        {...register("yourname", { required: true })} />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">
                                            Your Name
                                        </span>
                                    </label>
                                    <input
                                        className="input border-black"
                                        type="text"
                                        placeholder="yourname"
                                        {...register("yourname", { required: true })} />
                                </div>



                            </div>

                            <div>
                                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                            </div>

                            <div>
                                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                            </div>

                            <div>
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
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