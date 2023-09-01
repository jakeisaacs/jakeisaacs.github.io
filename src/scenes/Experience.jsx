import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section id="experience">
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
        </section>
    );
};

export default Experience;