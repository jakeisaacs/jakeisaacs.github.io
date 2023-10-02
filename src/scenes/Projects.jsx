import Carousel from "../components/Carousel";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8},
    visible: { opacity: 1, scale: 1}
}

const Project = ({ title, subtitle = "blah blah blah" }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative h-full w-full px-5"> 
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p>{subtitle}</p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt=48 pb-48">
            {/* HEADINGS */}
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
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center my-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-center mt-10">
                <Carousel images={["../assets/Social-Media-Website.jpg", "../assets/Crazy-Stairs.jpg", "../assets/Galaxy-Shooter.jpg"]} />
            </div>

            {/* PROJECTS */}
            {/* <div className="flex justify-center mt-10">
                <motion.div
                    className="flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >

                    <Project title="Project 1" />
                    <Project title="Project 2" />
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />
                    <Project title="Project 6" />
                    <Project title="Project 7" />

                </motion.div>
            </div> */}

        </section>
    );
};

export default Projects;