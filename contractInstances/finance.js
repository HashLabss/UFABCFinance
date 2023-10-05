const address = '0xBd55427ba51FfF685f5ca6fEa3F16867d6F4F817';
const { abi } = require('../build/contracts/Finance.json');

const financeContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default financeContract;
