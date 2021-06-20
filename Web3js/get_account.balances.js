let Web3 = require('web3');

let url = 'https://mainnet.infura.io/v3/6f6b72ca64b84e1d9ab5d519785fa749';
// let web3 = new Web3(url);
let web3 = new Web3(new Web3.providers.HttpProvider(url));
let address = '	0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

web3.eth.getBalance(address, function(error, result) {
  if(!error) {
    console.log(web3.utils.fromWei(result, 'ether'));
  } else {
    console.log(error);
  }
});