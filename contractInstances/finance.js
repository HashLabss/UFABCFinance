const address = '0xfc540CeE433B369Dc29D3C803243E61Cfa672a27'; //0xfc540CeE433B369Dc29D3C803243E61Cfa672a27 esse e o mais atualizado
const { abi } = require('../build/contracts/Finance.json');

const financeContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default financeContract;
