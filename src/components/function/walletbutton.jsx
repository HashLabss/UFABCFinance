'use client';
import web3 from '../../../contractInstances/web3';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const WalletButton = ({ myPropFunction }) => {
    const [error, setError] = useState('');
    const [address, setAddress] = useState(null);
    const [loged, setLoged] = useState(false);
    //const walletButton = document.getElementById('walletButton');

    useEffect(() => {
        if (address) {
            setLoged(true);
        }
        const getAddress = async () => {
            try {
                const accounts = await web3.eth.getAccounts();
                setAddress(accounts[0]);
            } catch (err) {
                setError(err.message);
            }
        };
        getAddress();
    }, [address]);

    const connectWalletHandler = async () => {
        /* verificar se a metamask esta disponivel */
        try {
            /* pedir o wallet connect */
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            /* pegar a lista de contas */
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            setAddress(accounts[0]);

            /* criar uma copia local dos contratos */
        } catch (err) {
            setError(err.message);
        }
    };

    const [showDrop, setShowDrop] = useState(false);
    const buttonRef = useRef(null);

    // Função para fechar o menu dropdown quando ocorrer um clique fora dele
    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setShowDrop(false);
        }
    };

    // Adiciona um ouvinte de eventos de clique ao corpo do documento
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (loged) {
        return (
            <motion.button
                ref={buttonRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-2 px-4 relative  rounded-2xl bg-primary flex flex-col "
            >
                <div className="flex items-center self-center">
                    <h1>{String(address).substring(0, 8) + '...'}</h1>
                </div>

                {showDrop && (
                    <div className="md:absolute md:right-0 md:top-[140%] mt-2 md:mt-0 flex flex-col items-center rounded-2xl p-4 bg-dbase">
                        <Link
                            onClick={myPropFunction}
                            className="py-1 px-5 bg-cbrown w-full rounded-2xl mb-2 text-center hover:bg-cbase"
                        >
                            Profile
                        </Link>
                        <button className="p-1 px-5 bg-cbrown w-full rounded-2xl text-center hover:bg-cbase">
                            Logout
                        </button>
                    </div>
                )}
            </motion.button>
        );
    } else {
        return (
            <motion.button
                onClick={connectWalletHandler}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                id="walletButton"
                className="bg-primary hover:bg-cprimary font-bold py-2 px-4 rounded-2xl"
            >
                Conectar
            </motion.button>
        );
    }
};

export default WalletButton;
