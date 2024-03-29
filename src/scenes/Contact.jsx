import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {
    const {
        register,
        trigger,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        } else {
            reset({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    // useEffect(() => {
    //     reset({
    //         name: "",
    //         email: "",
    //         message: "",
    //     });
    //   }, [isSubmitSuccessful]);

    return (
        <section id="contact" className="py-48">
            {/* HEADINGS */}
            <motion.div
                className="flex justify-center w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red ">C</span>ONTACT <span className="text-red ">ME</span>
                    </p>
                    <div className="flex md:justify-end my-5">

                    </div>
                    <LineGradient width=""/>
                </div>
            </motion.div>

            {/* FORM */}
            <div className="md:flex md:justify-center gap-16 mt-5">

            <motion.div
                className="basis-1/2 mt-10 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/6bee38ead7b9de0fbc6b644afd169480"
                    method="POST"
                >
                    <input 
                        className="w-full bg-grey font-semibold placeholder-opaque-black p-3"
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    {errors.name && (
                        <p className="text-red mt-1">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 chars."}
                        </p>
                    )}
                    <input 
                        className="w-full bg-grey font-semibold placeholder-opaque-black p-3 mt-5"
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="text-red mt-1">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                    <textarea 
                        className="w-full h-24 bg-grey font-semibold placeholder-opaque-black p-3 mt-5"
                        type="text"
                        placeholder="MESSAGE"
                        row="4"
                        columns="50"
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.email && (
                        <p className="text-red mt-1">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 2000 chars."}
                        </p>
                    )}
                    <div className="flex justify-center">
                    <button
                        type="submit"
                        className="p-5 w-1/5 bg-red font-semibold text-deep-blue mt-5 hover:bg-purple
                        hover:text-white transition duration-500"
                    >
                        SEND!
                    </button>
                    </div>
                </form>
            </motion.div>
            </div>
        </section>
    );
};

export default Contact;