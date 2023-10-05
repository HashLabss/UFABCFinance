// import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import web3 from '../../contractInstances/web3'
// import partyChainContract from '../../../contractInstances/partychain';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Web3 from 'web3';



const HDWalletProvider = require('@truffle/hdwallet-provider');

const PROJECT = process.env.NEXT_PUBLIC_PROJECT_ID;

export default function CreateGame() {
    // const fs = require('fs')
    const [name, setName] = useState('');
    
    const [score, setScore] = useState('');
    
    const [privateKey, setPrivateKey] = useState('');
    const [accounts, setAccounts] = useState('');
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const address = localStorage.getItem('address');
            const privKey = localStorage.getItem('privateKey');
            setAccounts(address);
            setPrivateKey(privKey);
        }
        
    }, []);

    const createEventHandller = async () => {
        setIsLoading(true);
        try {
            const url = `https://polygon-mumbai.infura.io/v3/${PROJECT}`;
            const provider = new HDWalletProvider(privateKey, url);
            const web = await new Web3(provider);
            const instance = partyChainContract(web);
            // const address = await web3.eth.getAccounts()

            const pinata = await uploadToServer();
            const ipfsHash = pinata.data.resultado.IpfsHash;
            const link = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
            console.log(ipfsHash);
            const ethPrice = web.utils.toWei(price, 'ether');
            const data = await instance.methods
                .createEvent(name, numQuestion, description, ethPrice, link)
                .send({
                    from: accounts,
                });
            console.log(data.events.returnValues);
            setIsLoading(false);
            setShowConfirmationPopup(false);
            // alert('Evento criado com sucesso!');
            window.location.assign(`/events`);
        } catch (error) {
            alert(error);
            setIsLoading(false);
            setShowConfirmationPopup(false);
        }
    };

    const uploadToServer = async () => {
        const formData = new FormData();
        formData.append('file', file);
        return axios.post('/api/image2', formData);
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
                            className="grid grid-lines-7 bg-dbase drop-shadow-lg rounded-2xl p-8 md:p-14 shadow-md"
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
