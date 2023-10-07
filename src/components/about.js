import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="my-20 mx-auto w-1/2 flex flex-col justify-center items-center">
                <motion.h2
                    className="text-6xl font-bold text-center"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    One of the first real use blockchain dapps
                </motion.h2>
            </div>
            <div className="w-full mx-auto px-20 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-white/20 overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col items-center md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Create and participate in decentralized events
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Decentralization in events aims to empower individuals, remove intermediaries, increase
                                transparency, and foster a more inclusive and equitable event ecosystem.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid border-white/20 h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-white/20 overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Control the secondary market of tickets
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Regulate and manage the resale of event tickets on secondary platforms or marketplaces.
                                In traditional ticketing systems, once tickets are sold, the original seller loses
                                control over their subsequent sale and pricing, which can lead to scalping, price
                                gouging, and other unfair practices.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid border-white/20 h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-white/20 overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Gamefy events
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Gamifying or turning events into interactive and engaging experiences inspired by games.
                                In Gamefy events, elements commonly found in games, such as competition, challenges,
                                rewards, and progression, are incorporated into various types of events, including
                                conferences, workshops, team-building activities, and marketing campaigns.
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid border-white/20 h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-white/20 overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Avoid scalpers
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Preventing or discouraging the activities of ticket scalpers or ticket resellers who
                                engage in unethical or illegal practices to profit from selling tickets at inflated
                                prices.
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid border-white/20 h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
