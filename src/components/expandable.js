import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Expandable = () => {
    const [showContent, setShowContent] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
    })

    const handleDivClick = (div) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showContent[div]

        // Fechar todas as divs
        const updatedShowContent = {
            div1: false,
            div2: false,
            div3: false,
            div4: false,
        }

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowContent[div] = true
        }

        // Atualizar o estado
        setShowContent(updatedShowContent)
    }

    return (
        <section className="w-full mb-60">
            <div className="w-full mx-auto text-center max-w-screen-2xl my-16 md:pt-20">
                <h2 className="text-6xl font-bold">Empowering Events with our DApp</h2>
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
                        <h3 className="text-4xl font-bold mb-0">Global reach</h3>
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
                                        By leveraging blockchain technology, our decentralized application (DApp) for
                                        ticket sales has the potential to gain global traction and overcome many of the
                                        limitations faced by traditional centralized systems.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        The blockchain provides a transparent, secure, and tamper-proof platform for
                                        conducting ticket sales, ensuring fair access, preventing fraud, and enabling
                                        transparent revenue distribution.
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
                        <h3 className="text-4xl font-bold mb-0">Event Passport</h3>
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
                                        By implementing this event passport system, users can enjoy the convenience of
                                        having a single address or digital wallet for managing their ticket purchases
                                        across different events and locations.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        The blockchain ensures the integrity of ticket ownership records, reducing the
                                        risk of fraudulent activities, such as counterfeit tickets or unauthorized
                                        transfers.
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
                        <h3 className="text-4xl font-bold mb-0">Event Control</h3>
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
                                        The immutable nature of blockchain records guarantees the authenticity and
                                        uniqueness of each ticket. This feature prevents fraud and counterfeiting,
                                        safeguarding both event organizers and attendees.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        Smart contracts can be utilized to automate ticket verification and enforce
                                        specific terms and conditions, ensuring a seamless and secure ticketing
                                        experience.
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
                        <h3 className="text-4xl font-bold mb-0">Unique and Free System</h3>
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
                                        In the world of ticket sales, traditional centralized systems often face
                                        challenges such as counterfeit tickets, high fees, and lack of transparency.
                                    </p>
                                    <p className="tw-lead text-xl font-bold md:tw-title-sm mb-10">
                                        By leveraging blockchain technology, our decentralized application (DApp) can
                                        address these issues and provide a unique and cost-effective solution.
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
    )
}

export default Expandable
