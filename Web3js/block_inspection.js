let Web3 = require('web3');

let url = 'https://mainnet.infura.io/v3/6f6b72ca64b84e1d9ab5d519785fa749';
let web3 = new Web3(url);

web3.eth.getBlockNumber(function (error, result) {
  console.log(result);
});

web3.eth.getBlock(12660674, true, function(error, result) {
  console.log(result);
});

web3.eth.getBlockNumber(function (error, result) {
  for(let i =0; i< 100; i++) {
    web3.eth.getBlock(result - i, true, function(error, result) {
      console.log('blockNum', result.number);
    });
  }
});

web3.eth.getBlock('latest', true, function(error, result) {
  console.log('latest', result.number);
});

web3.eth.getBlock('pending', true, function(error, result) {
  console.log('pending', result.number);
});