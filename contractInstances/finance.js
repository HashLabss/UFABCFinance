const address = '0x11DE8a7274d2d04d95C5904B585E79472D4f241B';
const { abi } = require('../build/contracts/Finance.json');

const financeContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default financeContract;
