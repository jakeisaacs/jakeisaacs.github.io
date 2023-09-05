import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="experience" className="h-full w-full">
        <motion.div
                className="md:w-2/5 mx-auto text-center"
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
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        <span className="text-red">EXP</span>ERIENCE
                    </p>
                </div>
            </motion.div>
            <motion.div
                className="mflex justify-between w-full md:w-2/3 max-w-[850px] h-5/6 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <iframe className="flex justify-between w-full h-full mx-auto" 
                    src="https://docs.google.com/document/d/e/2PACX-1vSDwUwTHgt3nw_wnHd5OVGt2BNJkut1VsOrXUiJzOLppxKvX9yVmwCZ9LVdsg75ETR5HRJgkfYeI_TR/pub?embedded=true" 
                    title="Resume" 
                />
            </motion.div>
        </section>
    );
};

export default Experience;