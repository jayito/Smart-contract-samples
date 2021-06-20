let Web3 = require('web3');

let url = 'https://mainnet.infura.io/v3/6f6b72ca64b84e1d9ab5d519785fa749';
let web3 = new Web3(url);

let wallet = web3.eth.accounts.wallet.create(2, 'some random string');

let account = web3.eth.accounts.create();

wallet.add(account.privateKey);

console.log(wallet);