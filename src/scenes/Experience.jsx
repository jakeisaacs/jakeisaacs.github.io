import { motion } from "framer-motion";
import ListBox from "../components/ListBox";

const Experience = () => {
    const experiences = [
        {
            "header": "Navarro Research and Engineering, Inc.",
            "body": [
                "Developed over 30 automated solutions, reducing process times by over 90% in certain systems. Platforms include Azure, Power Platform, IBM Cognos, PowerShell, Excel. Languages include JavaScript, Python, SQL, VBA, Dax, M, and C#.",
                "Lead iniative to remediate unmanaged C# Blazor code powered by AWS EC2 by fixing immediate coding issues and directing management to bring back the original developer. \
                    The organizaiton saw an immediate increase in user satisfaction and reduction in error rates.",
                "Brought primary and multiple sub-organizations to the cloud, setting new precedents for automation and efficiency in the workplace and reducing manual overhead."

            ]
        },
        {
            "header": "University of Tennessee",
            "body": ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        },
        {
            "header": "Isaacs Bowman Investments",
            "body": ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        }
    ];

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
                className="md:flex justify-center w-full h-full mx-auto py-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 3.0 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                {experiences.map((exp) => {
                    return (
                        <ListBox key={exp['header']} header={exp['header']} listitems={exp['body']} />
                    )
                })}
            </motion.div>
        </section>
    );
};

export default Experience;