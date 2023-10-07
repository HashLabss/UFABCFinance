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
                    Lifes short playhard
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
                                Historia
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Fundada em agosto de 2013, a Liga de Mercado Financeiro da UFABC tem como principal
                                objetivo integrar a comunidade acadêmica ao mercado financeiro, tornando-se um local em
                                que os membros de diferentes cursos podem se unir para o compartilhamento e a evolução
                                do conhecimento acerca do mercado.
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
                                Missão
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Integrar o mercado financeiro à comunidade acadêmica da UFABC através de atividades
                                direcionadas à formação de profissionais devidamente capacitados para atuação nas áreas
                                de finanças.
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
                                Visão
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Contribuir para o desenvolvimento pessoal e profissional dos alunos da UFABC, para que
                                estes atinjam excelência de modo a difundir a universidade como referência no mercado
                                financeiro.
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
                                Valores
                            </motion.h1>
                            <motion.p
                                className="mt-4"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                O pilar de valores é sustentado por fatores aos quais se destacam: cooperação, esforço,
                                iniciativa, versatilidade e boa vontade.
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
