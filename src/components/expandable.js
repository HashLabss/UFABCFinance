import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Expandable = () => {
    const [showContent, setShowContent] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
    });

    const handleDivClick = (div) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showContent[div];

        // Fechar todas as divs
        const updatedShowContent = {
            div1: false,
            div2: false,
            div3: false,
            div4: false,
        };

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowContent[div] = true;
        }

        // Atualizar o estado
        setShowContent(updatedShowContent);
    };

    return (
        <section className="w-full mb-60">
            <div className="w-full mx-auto text-center max-w-screen-2xl my-16 md:pt-20">
                <h2 className="text-6xl font-bold">Diretorias</h2>
            </div>

            {/* Div 1 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-white/5 rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div1')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Gestao de Talentos</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div1 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div1 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-cprimary font-bold">
                                        Investindo em Futuros Líderes Financeiros: Nossa Liga, Seu Sucesso.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Em nosso mundo altamente competitivo, o mercado financeiro universitário é um
                                        campo de batalha onde a excelência e o potencial brilhante se destacam. Na UFABC
                                        Finance, nosso lema é moldar, nutrir e capacitar nossos membros para o mercado
                                        financeiro. Estamos comprometidos em construir uma comunidade onde o talento é
                                        cultivado com paixão e os líderes do amanhã são forjados com conhecimento. Nosso
                                        objetivo é claro: promover o desenvolvimento de habilidades, aprimorar a
                                        compreensão do mercado financeiro e orientar nossos membros para uma carreira de
                                        sucesso no mundo financeiro. Juntos, estamos transformando sonhos em conquistas
                                        e moldando o futuro financeiro.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div>
                                        <img
                                            src="global-reach-image.jpg"
                                            alt="Global Reach"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Div 2 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-white/5 rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div2')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Projetos</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div2 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div2 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-cprimary font-bold">
                                        Transformando Ideias em Ações: A Força por Trás do Sucesso Financeiro.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Na UFABC Finance, nossa Diretoria de Projetos é a força motriz por trás de
                                        iniciativas inovadoras e desafiadoras. Nosso compromisso é transformar ideias em
                                        ações e, assim, impulsionar nosso crescimento e influência na comunidade
                                        acadêmica e financeira. Somos movidos pela paixão por projetos bem-sucedidos e
                                        pelo desejo de criar impacto positivo. Nossa meta é proporcionar experiências
                                        únicas e enriquecedoras para nossos membros, ao mesmo tempo que contribuímos
                                        para o desenvolvimento de habilidades essenciais e conhecimento prático no
                                        mercado financeiro.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div>
                                        <img
                                            src="enhanced-security-image.jpg"
                                            alt="Enhanced Security"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Div 3 */}
            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-white/5 rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div3')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Tesouraria</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div3 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div3 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-cprimary font-bold">
                                        Mestres da Gestão Financeira: Multiplicando Oportunidades, Minimizando Riscos.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Na UFABC Finance, nossa Diretoria de Tesouraria é responsável por gerir os
                                        recursos financeiros com sabedoria e visão. Nosso compromisso é cuidar dos
                                        fundos da liga com responsabilidade e estratégia, investindo-os em ativos que
                                        não apenas promovam o crescimento financeiro, mas também enriqueçam nossos
                                        membros. Acreditamos que investir em cursos, oportunidades de aprendizado e
                                        projetos benéficos cria um legado valioso para nossa comunidade, capacitando
                                        nossos membros para um futuro de sucesso no mundo financeiro.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div>
                                        <img
                                            src="efficient-transactions-image.jpg"
                                            alt="Efficient Transactions"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="w-full mx-auto my-5 px-20 max-w-screen-2xl">
                <div className="bg-white/5 rounded-xl md:rounded-[32px] px-6 md:px-10 py-6 md:py-12">
                    <motion.button
                        onClick={() => handleDivClick('div4')}
                        className="w-full flex justify-between items-center bg-transparent appearance-none border-none p-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <h3 className="text-4xl font-bold mb-0">Marketing</h3>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            className="transition-transform w-6 md:w-9"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: showContent.div4 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path
                                d="M5.67578 12.5884L17.999 24.9116L30.3223 12.5884"
                                stroke="white"
                                strokeOpacity="0.6"
                                strokeWidth="3"
                            ></path>
                        </motion.svg>
                    </motion.button>

                    {showContent.div4 && (
                        <motion.div
                            className="transition-all overflow-hidden max-h-none"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="flex-1 pt-5 md:pt-20 order-2 md:order-1 flex flex-col justify-center">
                                    <p className="tw-lead text-2xl md:tw-title-sm mb-10 text-cprimary font-bold">
                                        Estratégia e Criatividade: Impulsionando a Excelência Financeira.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Na UFABC Finance, nossa Diretoria de Marketing desempenha um papel crucial na
                                        construção e manutenção de nossa reputação e presença. Nossa missão é comunicar
                                        nossa paixão pelo mercado financeiro e o valor que adicionamos à comunidade
                                        acadêmica. Com estratégia, criatividade e compromisso, trabalhamos para
                                        fortalecer nossos laços com nossos membros e a sociedade em geral. Acreditamos
                                        que uma imagem sólida e uma comunicação eficaz são essenciais para o sucesso da
                                        liga e para inspirar futuros líderes financeiros.
                                    </p>
                                </div>
                                <div className="flex-1 order-1 md:order-2 mt-10 md:mt-0 aspect-[821/750]">
                                    <div>
                                        <img
                                            src="efficient-transactions-image.jpg"
                                            alt="Efficient Transactions"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Expandable;
