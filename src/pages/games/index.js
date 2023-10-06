import Head from 'next/head';
import financeContract from '../../../contractInstances/finance';
import web3 from '../../../contractInstances/web3';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Events = ({ eventos }) => {
    console.log(eventos);
    const toggleMenu = () => {
        var menu = document.getElementById('filter-menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    };

    const [sname, setSname] = useState('');
    const [svalue, setSvalue] = useState('');
    const [fcategory, setFcategory] = useState('');
    const [fvalue, setFvalue] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleParticipate = async (gameId) => {
        const instance = financeContract(web3);
        const account = await web3.eth.getAccounts();
        const inGame = await instance.methods.inGame(gameId).call({ from: account[0] });
        if (inGame === true) {
            window.location.assign(`/games/${gameId}`);
        } else {
            await instance.methods.enterGame(gameId).send({ from: account[0] });
            window.location.assign(`/games/${gameId}`);
        }
    };

    const filterDataByNameAndCategory = (data, name, category) => {
        return data.filter((item) => {
            if (name === '') {
                if (category === '') {
                    return item;
                } else {
                    return item.name && item.category === category;
                }
            } else if (category === '') {
                if (name === '') {
                    return item;
                } else {
                    return item[1].toLowerCase() === name.toLowerCase();
                }
            } else {
                return item[1].toLowerCase() === name.toLowerCase() && item.category === category;
            }
        });
    };

    const filteredData = filterDataByNameAndCategory(eventos, svalue, fvalue);

    const items = filteredData.map((item, index) => {
        // const partes = item[8].split(/[-T]/);

        return (
            <div key={index}>
                <button
                    onClick={() => {
                        setShowPopup(true);
                    }}
                >
                    <div className="h-full p-3 bg-primary/50 rounded-2xl flex flex-col">
                        <p>ID {item[1]}</p>
                        <p className="font-bold text-3xl mb-4">{item[0]}</p>
                        <p>Owner: {item[2]}</p>
                        <p>Prize: {item[5]}</p>
                    </div>
                </button>
                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xl">
                        <div className="bg-base p-6 rounded-2xl shadow-md w-5/6 max-w-xl">
                            <p className="text-lg font-semibold mb-4 text-center">
                                Deseja participar do game {item[0]} ?
                            </p>
                            <p className="text-lg font-semibold mb-4 text-center">N° de questões: {item[6]}</p>
                            <p className="text-lg font-semibold mb-4 text-center">Prize: {item[5]}</p>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={() => handleParticipate(item[1])}
                                    className="px-4 py-2 bg-cprimary text-white rounded-2xl hover:bg-primary active:bg-cprimary focus:outline-none"
                                >
                                    Participar
                                </button>
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="px-4 py-2 text-white rounded-2xl hover:bg-dbase focus:outline-none"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    });

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="PartyChain" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <title>UFABC Finance</title>
            </Head>

            <section className="py-28 px-4 flex flex-col items-center justify-center min-h-screen bg-[url(../../public/images/backgroundlines.png)] bg-cover bg-fixed bg-center">
                <motion.div
                    className="bg-cbase container shadow-lg rounded-2xl w-full"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="bg-dbase rounded-t-2xl p-8">
                        <div className="flex-col flex md:flex-row md:items-center md:justify-between gap-2">
                            <h1 className="block text-4xl font-semibold ">Events</h1>
                            <div className="flex items-center gap-6">
                                <div>
                                    <button
                                        type="button"
                                        onClick={toggleMenu}
                                        className="inline-flex justify-center items-center px-4 py-2 font-bold bg-cprimary text-dbase rounded-2xl hover:bg-primary  active:bg-cprimary "
                                        id="filter-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        Filtro
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    <div
                                        className="hidden absolute z-10 mt-2 w-40 rounded-2xl shadow-lg backdrop-blur-2xl "
                                        id="filter-menu"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="filter-menu-button"
                                        tabIndex="-1"
                                    >
                                        <div className="px-4 py-2 text-sm font-medium  rounded-2xl">
                                            <label htmlFor="category">Categoria:</label>
                                            <select
                                                type="category"
                                                id="category"
                                                className="w-full border-gray-300 mt-1 rounded-md p-1 text-black"
                                                onChange={(e) => setFcategory(e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                <option value="Saude e Bem-Estar">Saude e Bem-Estar</option>
                                                <option value="Educação e Qualidade">Educação e Qualidade</option>
                                                <option value="Industria, Inovação e Infraestrutura">
                                                    Industria, Inovação e Infraestrutura
                                                </option>
                                                <option value="Paz, Justiça e Instituições Eficazes">
                                                    Paz, Justiça e Instituições Eficazes
                                                </option>
                                            </select>

                                            <button
                                                onClick={() => setFvalue(fcategory)}
                                                className="mt-4 bg-cprimary text-dbase py-2 px-4 rounded-2xl hover:bg-primary active:bg-cprimary"
                                            >
                                                Filter
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center py-2">
                                    <input
                                        className="h-10 w-full px-4  py-2 rounded-l-2xl bg-cbase focus:border-cprimary focus:border-2 focus:outline-none"
                                        placeholder="Pesquisar"
                                        onChange={(e) => setSname(e.target.value)}
                                        onKeyUp={(e) => {
                                            if (e.key === 'Enter') {
                                                setSvalue(sname);
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={() => setSvalue(sname)}
                                        className="h-10 p-2 rounded-r-2xl bg-cprimary hover:bg-primary active:bg-cprimary"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-search h-5 w-5"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="M21 21l-4.35-4.35" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{items}</div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export const getServerSideProps = async () => {
    const instance = financeContract(web3);
    const eventos = await instance.methods.getGames().call();
    console.log(eventos);

    return { props: { eventos } };
};

export default Events;
