import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import web3 from '../../../../contractInstances/web3';
import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GamesId = () => {
    const questions = [
        {
            question: 'Qual é a capital do Brasil?',
            options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador', 'Recife'],
            correctAnswer: 'Brasília',
        },
        {
            question: 'Qual é o maior planeta do sistema solar?',
            options: ['Terra', 'Júpiter', 'Vênus', 'Marte', 'Saturno'],
            correctAnswer: 'Júpiter',
        },
        // Adicione mais questões aqui
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 0, y: 0, transition: { delay: 0.3 } },
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="PartyChain" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <title>UFABC Finance</title>
            </Head>
            <section className="py-28 px-4 flex flex-col items-center justify-center min-h-screen bg-[url(../../public/images/backgroundlines.png)] bg-cover bg-fixed bg-center">
                <motion.div variants={containerVariants} className="w-full container bg-dbase rounded-2xl px-8 py-4">
                    <motion.div variants={containerVariants} className="flex flex-col gap-6    rounded-2xl">
                        <div className="flex justify-around items-center border-b-2 border-base py-4">
                            <h1>Nome Jogo </h1>
                            <h1>Questões</h1>
                        </div>
                        <div className="flex p-4 w-full justify-between">
                            <div>
                                <h2 className="mb-4">
                                    Questão {currentQuestion + 1}/{questions.length}
                                </h2>
                                <p className="text-2xl mb-2">{questions[currentQuestion].question}</p>
                                <ul className="p-4">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <li key={index}>
                                            <input type="radio" name="option" className="mr-2 my-4 " />
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex gap-6 self-end">
                                {currentQuestion > 0 && (
                                    <motion.button
                                        onClick={handlePreviousQuestion}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        id="walletButton"
                                        className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                    >
                                        Anterior
                                    </motion.button>
                                )}
                                {currentQuestion < questions.length - 1 && (
                                    <motion.button
                                        onClick={handleNextQuestion}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        id="walletButton"
                                        className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                    >
                                        Próxima
                                    </motion.button>
                                )}
                                {currentQuestion === questions.length - 1 && <button>Enviar</button>}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default GamesId;
