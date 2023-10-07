// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import web3 from '../../../contractInstances/web3';
import financeContract from '../../../contractInstances/finance';
import { motion } from 'framer-motion';
import Head from 'next/head';
// import Web3 from 'web3';

export default function CreateGame() {
    // const fs = require('fs')
    const [name, setName] = useState();

    const [score, setScore] = useState();
    const [alternatives, setAlternatives] = useState([]); // State for storing alternatives
    const [gameId, setGameId] = useState();
    const [question, setQuestion] = useState();
    const [correctA, setCorrectA] = useState();

    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const address = localStorage.getItem('address');
    //         const privKey = localStorage.getItem('privateKey');
    //         setAccounts(address);
    //         setPrivateKey(privKey);
    //     }

    // }, []);

    const addAlternative = () => {
        setAlternatives([...alternatives, '']); // Add an empty string as a new alternative
    };

    const handleAlternativeChange = (index, value) => {
        const updatedAlternatives = [...alternatives];
        updatedAlternatives[index] = value;
        setAlternatives(updatedAlternatives);
    };

    const removeAlternative = (index) => {
        const updatedAlternatives = [...alternatives];
        updatedAlternatives.splice(index, 1); // Remove the alternative at the specified index
        setAlternatives(updatedAlternatives);
    };

    const createEventHandller = async () => {
        setIsLoading(true);
        try {
            // console.log(address[0]);
            console.log(name, score);
            const instance = await financeContract(web3);
            const address = await web3.eth.getAccounts();

            await instance.methods.createGame(name, score).send({ from: address[0] });
            setIsLoading(false);
            setShowConfirmationPopup(false);
            // alert('Evento criado com sucesso!');
        } catch (error) {
            alert(error);
            setIsLoading(false);
            setShowConfirmationPopup(false);
        }
    };

    const addQuestionHandler = async () => {
        setIsLoading(true);
        try {
            // console.log(address[0]);
            console.log(name, score);
            const instance = await financeContract(web3);
            const address = await web3.eth.getAccounts();

            await instance.methods.addQuestion(gameId, question, correctA, alternatives).send({ from: address[0] });
            setIsLoading(false);
            setShowConfirmationPopup(false);
            // alert('Evento criado com sucesso!');
        } catch (error) {
            alert(error);
            setIsLoading(false);
            setShowConfirmationPopup(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="PartyChain" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <title>PartyChain | Create Event</title>
            </Head>

            <section className="w-full min-h-screen py-28 bg-[url(../../public/images/backgroundlines.png)] bg-cover bg-fixed bg-center flex justify-center items-center ">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-2xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">CREATE Game</h2>
                        <fieldset
                            id="form"
                            className="grid grid-lines-7 mb-10 bg-dbase drop-shadow-lg rounded-2xl p-8 md:p-14 shadow-md"
                        >
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-xl font-medium mb-2">
                                    Name
                                </label>

                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Game Name"
                                    id="name"
                                    className="w-full bg-base border-cbase focus:outline-none  focus:border-cprimary border-solid border-2 rounded-2xl p-3 placeholder:italic"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="score" className="block text-xl font-medium mb-2">
                                    Score/Question
                                </label>

                                <input
                                    onChange={(e) => setScore(e.target.value)}
                                    placeholder="Score"
                                    id="score"
                                    className="w-full bg-base border-cbase focus:outline-none  focus:border-cprimary border-solid border-2 rounded-2xl p-3 placeholder:italic"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="bg-primary hover:bg-cprimary mt-4 px-12 py-3 justify-self-center rounded-2xl font-bold text-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowConfirmationPopup(true)}
                            >
                                Create
                            </motion.button>
                        </fieldset>

                        <fieldset
                            id="form"
                            className="grid grid-lines-7 bg-dbase drop-shadow-lg rounded-2xl p-8 md:p-14 shadow-md"
                        >
                            <h1 className="text-3xl font-bold text-center mb-4">Add Questions</h1>
                            <div className="mb-6">
                                <label htmlFor="gameid" className="block text-xl font-medium mb-2">
                                    Game ID
                                </label>

                                <input
                                    onChange={(e) => setGameId(e.target.value)}
                                    placeholder="Game ID"
                                    id="gameid"
                                    className="w-full bg-base border-cbase focus:outline-none  focus:border-cprimary border-solid border-2 rounded-2xl p-3 placeholder:italic"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="question" className="block text-xl font-medium mb-2">
                                    Question
                                </label>

                                <input
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder="Question"
                                    id="question"
                                    className="w-full bg-base border-cbase focus:outline-none  focus:border-cprimary border-solid border-2 rounded-2xl p-3 placeholder:italic"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="alternatives" className="block text-xl font-medium mb-2">
                                    Alternatives
                                </label>

                                {alternatives.map((alternative, index) => (
                                    <div key={index} className="flex items-center gap-2 text-center mb-4">
                                        <h1>{index}-</h1>
                                        <input
                                            onChange={(e) => handleAlternativeChange(index, e.target.value)}
                                            placeholder={`Alternative ${index}`}
                                            className="w-full bg-base border-cbase focus:outline-none focus:border-cprimary border-solid border-2 rounded-2xl p-3 placeholder:italic"
                                        />
                                        <button
                                            onClick={() => removeAlternative(index)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                        >
                                            -
                                        </button>
                                    </div>
                                ))}

                                <motion.button
                                    onClick={addAlternative}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-cprimary mt-2 px-6 py-2 justify-self-center rounded-2xl font-bold text-lg shadow-lg"
                                >
                                    Add Alternative
                                </motion.button>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="index" className="block text-xl font-medium mb-2">
                                    Correct Answer
                                </label>

                                <input
                                    onChange={(e) => setCorrectA(e.target.value)}
                                    placeholder="Index"
                                    id="index"
                                    className="w-full bg-base border-cbase focus:outline-none  focus:border-cprimary border-solid border-2 rounded-2xl p-3 placeholder:italic"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="bg-primary hover:bg-cprimary mt-4 px-12 py-3 justify-self-center rounded-2xl font-bold text-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={addQuestionHandler}
                            >
                                Add
                            </motion.button>
                        </fieldset>
                        {showConfirmationPopup && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xl">
                                <div className="bg-base p-6 rounded-2xl shadow-md">
                                    <p className="text-lg font-semibold mb-4">Deseja criar o game?</p>
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={createEventHandller}
                                            className="px-4 py-2 bg-cprimary text-white rounded-2xl hover:bg-primary active:bg-cprimary focus:outline-none"
                                        >
                                            Confirmar
                                        </button>
                                        <button
                                            onClick={() => setShowConfirmationPopup(false)}
                                            className="px-4 py-2 text-white rounded-2xl hover:bg-dbase focus:outline-none"
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isLoading && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-base p-6 rounded-lg shadow-md flex items-center justify-center space-x-4">
                                    <div className="animate-spin w-10 h-10 border-t-4 border-b-4 border-cprimary rounded-full"></div>
                                    <p className="text-lg font-semibold">Waiting for blockchain response...</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
