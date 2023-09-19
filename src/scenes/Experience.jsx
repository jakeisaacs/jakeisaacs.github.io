import { motion } from "framer-motion";
import ListBox from "../components/ListBox";
import LineGradient from "../components/LineGradient";

const Experience = () => {
    const experiences = [
        {
            "header": "Navarro Research and Engineering, Inc.",
            "subheader": "Senior Data Analyst",
            "body": [
                "Developed over 30 automated solutions, reducing process times by over 90% in certain systems. Platforms include Azure, Power Platform, IBM Cognos, PowerShell, Excel. Languages include JavaScript, Python, SQL, VBA, Dax, M, and C#.",
                "Led iniative to remediate unmanaged C# Blazor code powered by AWS EC2 by fixing immediate coding issues and directing management to bring back the original developer. \
                    The organizaiton saw an immediate increase in user satisfaction and reduction in error rates.",
                "Brought primary and multiple sub-organizations to the cloud, setting new precedents for automation and efficiency in the workplace and reducing manual overhead."

            ]
        },
        {
            "header": "University of Tennessee",
            "subheader": "Reasearcher",
            "body": [
                "Grouped input data through K-means clustering and implemented pre-packaged and custom machine learning models through R (Caret) and Python (TensorFlow).",
                "Performed regression analysis, probability distribution fitting, hierarchical clustering, and graphical analyses of the input data to estimate the number of clusters and determine correlations between the input and output data.",
                "Designed and trained a custom TensorFlow neural network model with over 90% prediction accuracy that beat all tuned machine learning models tested, including XGBoost, Random Forest, and Support Vector Machine models.",
                "Research published in Computational Materials Science."
            ]
        },
        {
            "header": "Isaacs Bowman Investments",
            "subheader": "Owner & Operator",
            "body": [
                "Provided and stocked ATMs for venues in East Tennessee.",
                "Successfully paid off all machines within two years and maintained positive cash flow until closing the business to pursue out of state education.",
                "Determined viability of locations by analyzing key factors, including average foot traffic, cash utilization by customers, and business type.",
                "Gained invaluable lessons in business management, client negotiation, and inventory management as the business scaled to new locations."
            ]
        },
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
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">EXP</span>ERIENCE
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:flex justify-center w-full h-full mx-auto pt-10 pb-10 md:pb-20"
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
                        <ListBox key={exp['header']} header={exp['header']} subheader={exp['subheader']} icon="award_star" ncols={1} listitems={exp['body']} />
                    )
                })}
            </motion.div>
        </section>
    );
};

export default Experience;