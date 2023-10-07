import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import financeContract from '../../../../contractInstances/finance';
import web3 from '../../../../contractInstances/web3';
import Web3 from 'web3';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GamesId = ({ evento, quests, participants1, participants2 }) => {
    console.log(`Questoes: ${quests}`);
    console.log(`Evento: ${evento}`);
    console.log(`ParticipantsAddrList: ${participants2}`);
    console.log(`ParticipantsObjList: ${participants1}`);

    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const instance = financeContract(web3);
            const accounts = await web3.eth.getAccounts();
            const myScore = await instance.methods.getScore(gamesId).call({ from: accounts[0] });
            setScore(myScore);
        };
        fetchData();
    }, []);

    const router = useRouter();
    const gamesId = router.query.gamesID;
    let questions = [];
    quests.map((item, index) => {
        const obj = {
            question: item[0],
            options: item[1],
            correctAnswer: item[2],
        };
        questions.push(obj);
    });

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ansewerIndex, setAnsewerIndex] = useState(0);

    const handleNextQuestion = async () => {
        const instance = financeContract(web3);
        const accounts = await web3.eth.getAccounts();
        console.log(`GameId: ${gamesId}`);
        console.log(`QuestionId: ${currentQuestion}`);
        console.log(`Resposta: ${ansewerIndex}`);
        await instance.methods.answerQuestion(gamesId, currentQuestion, ansewerIndex).send({ from: accounts[0] });

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const ansewerQuestion = async () => {
        const instance = financeContract(web3);
        const accounts = await web3.eth.getAccounts();
        await instance.methods.answerQuestion(gamesId);
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
                            <h1>{evento[0]} </h1>
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
                                            <input
                                                type="radio"
                                                name="option"
                                                className="mr-2 my-4 "
                                                onChange={() => {
                                                    setAnsewerIndex(index);
                                                }}
                                            />
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
                                {currentQuestion === questions.length - 1 && (
                                    <button onClick={handleNextQuestion}>Enviar</button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export const getServerSideProps = async ({ query }) => {
    const instance = financeContract(web3);
    const eventID = query.gamesID;
    const evento = await instance.methods.getGame(eventID).call();
    const participants = await instance.methods.getParticipants(eventID).call();
    const participants1 = participants[0];
    const participants2 = participants[1];
    const quests = await instance.methods.getGameQuestions(eventID).call();
    console.log(evento);
    console.log(quests);
    console.log(participants);
    console.log(participants1);
    console.log(participants2);

    return { props: { evento, quests, participants1, participants2 } };
};

export default GamesId;
