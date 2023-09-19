import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import ListBox from "../components/ListBox";
import { motion } from "framer-motion";

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const languages = ["C++", "C#", "C", "Python", "R", "Java", "JavaScript", "SQL", "VBA", "DAX", "M", "PowerShell", "Bash", "XML", "HTML", "CSS"]
    const libraries = ["Node.js", "Express", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "Pytorch", "React", "Blazor"]
    const programs = ["Excel", "Word", "Power Point", "Power BI", "Power Apps", "Power Automate", "SQL Server", "AutoCAD", "AnyLogic Simulation"] 

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-center md:gap-16 mt-5">
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">SKILLS</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
            </motion.div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-8 gap-8">
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
                    <ListBox key={"languages"} header="Languages" icon="check" ncols={isAboveMediumScreens ? 3 : 3} listitems={languages} />
                </motion.div>
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 3.0 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <ListBox key={"libraries"} header="Libraries" icon="check" ncols={isAboveMediumScreens ? 3 : 3} listitems={libraries} />
                </motion.div>
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
                    <ListBox key={"programs"} header="Programs" icon="check" ncols={2} listitems={programs} />
                </motion.div>
            </div>

        </section>
    );
};

export default MySkills;