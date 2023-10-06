// import dailyImprovementsContract from '../../../Instances/DailyImprovements';
import partyChainContract from '../../../contractInstances/partychain';
import evenTokenContract from '../../../contractInstances/eventoken';
import web3 from '../../../contractInstances/web3';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
// import { data } from 'autoprefixer';
// import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import QRCode from 'qrcode.react';
import Head from 'next/head';

const ProfileID = ({ data }) => {
    const [activeTab, setActiveTab] = useState('settings');
    const [name, setName] = useState(null);
    const [verifierId, setId] = useState(null);
    const [profilePic, setProPic] = useState(null);
    const [address, setAddr] = useState(null);
    const [balance, setBalance] = useState("");
    const [evntbalance, setEvntBalance] = useState("");
    const [showQRCode, setShowQRCode] = useState(null);

    console.log(data);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const name = localStorage.getItem('name');
            setName(name);
            const verifierId = localStorage.getItem('verifierId');
            setId(verifierId);
            const profilePic = localStorage.getItem('profilePic');
            setProPic(profilePic);
            const address = localStorage.getItem('address');
            setAddr(address);
            const balance = localStorage.getItem('balance');
            setBalance(balance);
            const evntbalance = localStorage.getItem('evntbalance');
            setEvntBalance(evntbalance);
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleGenerateQRCode = (partyIndex) => {
        setShowQRCode(partyIndex); // Exibe o ingresso com o índice de festa especificado
    };

    const handleCloseQRCode = () => {
        setShowQRCode(null); // Oculta o ingresso quando o botão Fechar é clicado
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="PartyChain" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <title>UFABC Finance</title>
            </Head>

            <div className="min-h-screen flex justify-center w-full bg-[url(../../public/images/backgroundlines.png)] bg-cover bg-fixed bg-center ">
                <div className=" max-w-7xl py-40 px-4  w-full   ">
                    <div className="grid grid-cols-12 gap-4">
                        {/* Parte Fixa do Perfil em Destaque */}
                        <motion.div
                            className="col-span-12 md:col-span-4 h-52 bg-dbase rounded-2xl p-6 shadow-lg"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={profilePic}
                                    alt="profilePicture"
                                    className="h-16 w-auto rounded-full mr-4"
                                ></img>
                                <div className="flex flex-col truncate">
                                    <h2 className="text-xl font-bold whitespace-normal">{name}</h2>
                                    <p className=" ">{verifierId}</p>
                                </div>
                            </div>
                            <p className=" mb-2 truncate">Address: {address}</p>
                            <p className=" mb-2">MATIC: {parseFloat(data.balance).toFixed(2)}</p>
                            <p className=" mb-2">EVNT: {parseFloat(data.evntbalance).toFixed(2)}</p>
                            {/* Outras informações do perfil aqui */}
                        </motion.div>

                        {/* Seção das Abas e Conteúdo */}
                        <div className="col-span-12 md:col-span-8">
                            <motion.div
                                className="bg-dbase  rounded-2xl p-4 shadow-lg mb-4"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <ul className="flex gap-2 overflow-auto overflow-x-scroll py-2">
                                    <li
                                        className={`text-xl p-2 text-center rounded-2xl font-bold cursor-pointer ${
                                            activeTab === 'settings' ? 'bg-primary' : 'text-white'
                                        }`}
                                        onClick={() => handleTabClick('settings')}
                                    >
                                        Meus Eventos
                                    </li>
                                    <li
                                        className={`text-xl text-center p-2 rounded-2xl font-bold cursor-pointer ${
                                            activeTab === 'projects' ? 'bg-primary' : 'text-white'
                                        }`}
                                        onClick={() => handleTabClick('projects')}
                                    >
                                        Meus Ingressos
                                    </li>
                                    <li
                                        className={`text-xl p-2 rounded-2xl font-bold cursor-pointer ${
                                            activeTab === 'wallet' ? 'bg-primary' : 'text-white'
                                        }`}
                                        onClick={() => handleTabClick('wallet')}
                                    >
                                        Carteira
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Conteúdo das Abas */}
                            {activeTab === 'settings' && (
                                <motion.div
                                    className="bg-dbase rounded-2xl p-6 shadow-md"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h1 className="text-2xl p-3 font-bold">Meus Eventos</h1>
                                    <div>
                                        {data.myPartiesData.map((party, index) => (
                                            <div key={index}>
                                                <div>
                                                    <div className="h-full my-2 p-3 bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center overflow-hidden">
                                                        <h1 className='font-bold text-2xl text-black mb-4"'>
                                                            {party[1]}
                                                        </h1>
                                                        <div className="flex gap-2">
                                                            <motion.button
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                                            >
                                                                Editar Infos
                                                            </motion.button>
                                                            <Link href={`/events/${party[0]}`}>
                                                                <motion.button
                                                                    whileHover={{ scale: 1.05 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                    className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                                                >
                                                                    Ver Evento
                                                                </motion.button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            {activeTab === 'projects' && (
                                <motion.div
                                    className="bg-dbase rounded-2xl p-6 shadow-md"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h1 className="text-2xl p-3 font-bold">Meus Ingressos</h1>
                                    <div>
                                        {data.partiesInData.map((party, index) => (
                                            <div key={index}>
                                                <div>
                                                    <div className="h-full my-2 p-3 bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center overflow-hidden">
                                                        <h1 className='font-bold text-2xl text-black mb-4"'>
                                                            {party[1]}
                                                        </h1>
                                                        <div className="flex gap-2">
                                                            <motion.button
                                                                onClick={() => handleGenerateQRCode(index)}
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                                            >
                                                                Ver ingresso
                                                            </motion.button>
                                                            <Link href={`/events/${party[0]}`}>
                                                                <motion.button
                                                                    whileHover={{ scale: 1.05 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                    className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                                                >
                                                                    Ver Evento
                                                                </motion.button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <AnimatePresence>
                                                        {showQRCode === index && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 50 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 50 }}
                                                                className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/50 backdrop-blur-md"
                                                            >
                                                                <motion.div
                                                                    initial={{ scale: 0.5 }}
                                                                    animate={{ scale: 1 }}
                                                                    exit={{ scale: 0.5 }}
                                                                    className="max-w-xl bg-primary p-8 rounded-2xl  w-full mx-4 flex flex-col justify-between items-center gap-6"
                                                                >
                                                                    <h1 className='font-bold text-4xl mb-4"'>
                                                                        Ingresso {party[1]}
                                                                    </h1>
                                                                    <div className="bg-white p-4 rounded-2xl w-5/6 aspect-[1/1]">
                                                                        <QRCode
                                                                            value={address}
                                                                            style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                objectFit: 'cover',
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        onClick={handleCloseQRCode}
                                                                        className="bg-dprimary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
                                                                    >
                                                                        Fechar
                                                                    </button>
                                                                </motion.div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            {activeTab === 'wallet' && (
                                <motion.div
                                    className="bg-dbase rounded-2xl p-6 shadow-md"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Minha Carteira</h2>
                                        <div className="mb-2">
                                            <label className="text-gray-600">Endereço Público:</label>
                                            <p className="truncate">{address}</p>
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-gray-600">Saldo EVNT:</label>
                                            <p>{parseFloat(data.evntbalance).toFixed(2)} EVNT</p>
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-gray-600">Saldo MATIC:</label>
                                            <p>{parseFloat(data.balance).toFixed(2)} MATIC</p>
                                        </div>
                                        <div className="mb-2">
                                            <label className="text-gray-600">Histórico de Transções:</label>
                                            <div>
                                                <Link
                                                    className="underline text-primary hover:text-cprimary active:text-primary"
                                                    href={`https://mumbai.polygonscan.com/address/${address}`}
                                                >
                                                    polygon-scan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Informações de Endereço */}
                                    <div className="border-b py-4">
                                        <h2 className="text-xl font-semibold mb-2">Enviar EVNT</h2>
                                        <div>
                                            <label className="text-gray-600">Endereço:</label>
                                            <p>endereço</p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                className="bg-primary hover:bg-cprimary   px-12 py-3 rounded-2xl font-bold text-lg shadow-lg"
                                                href={'/buypage'}
                                            >
                                                Buy EVNT
                                            </Link>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async ({ query }) => {
    const addr = query.profileId;
    console.log(addr);

    const instance = await partyChainContract(web3);
    const evenTokenInstance = await evenTokenContract(web3);

    let balance = await web3.eth.getBalance(addr);
    balance = web3.utils.fromWei(balance, 'ether');
    let evntbalance = await evenTokenInstance.methods.balanceOf(addr).call();
    evntbalance = web3.utils.fromWei(evntbalance, 'ether');

    const partiesIn = await instance.methods.getPartiesIamIn(addr).call();
    const partiesIn2 = partiesIn;
    const myParties = await instance.methods.getMyParties(addr).call();
    const myParties1 = myParties;
    const data = {
        partiesInData: partiesIn2,
        myPartiesData: myParties1,
        balance: balance,
        evntbalance: evntbalance,
    };
    console.log(data);

    return { props: { data: data } };
};

export default ProfileID;
