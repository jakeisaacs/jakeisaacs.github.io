import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3 md:w-2/3"/>
                    <p className="mt-10 mb-7">
                        Jake of all trades, master of none.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img 
                                alt="profile"
                                className="z-10"
                                src="assets/skills-image.png"
                            />
                        </div>
                    ) : (
                        <img 
                            alt="profile"
                            className="z-10"
                            src="assets/skills-image.png"
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32 before:w-1/2 before:absolute before:md:w-3/4 before:left-14 before:max-w-[200px] before:bg-blue before:h-32 before:right-0 before:top-0 before:z-[-1]">
                        <div className="z-10 ">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        
                    </div>
                    <p className="mt-5">
                        Lots of experience....
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 1.0, duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32 before:w-1/2 before:absolute before:md:w-3/4 before:left-14 before:max-w-[200px] before:bg-red before:h-32 before:right-0 before:top-0 before:z-[-1]">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                    </div>
                    <p className="mt-5">
                        Lots of innovation....
                    </p>
                </motion.div>

                {/* Imaginative */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 2.0, duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="relative h-32 before:w-1/2 before:absolute before:md:w-3/4 before:left-14 before:max-w-[200px] before:bg-yellow before:h-32 before:right-0 before:top-0 before:z-[-1]">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                    </div>
                    <p className="mt-5">
                        Lots of imagination....
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default MySkills;