var Web3 = require('Web3');

if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));


var balance = web3.eth.getBalance("77b0ab1e1b4e11a92ea12dd1a8b710f5d8187079");
console.log(balance); // instanceof BigNumber
console.log(balance.toString(10)); // '1000000000000'
console.log(balance.toNumber()); // 1000000000000


var balance = web3.eth.getBalance("ca5df19fa7dccd7f686c96bc281d1075d3949287");
console.log(balance); // instanceof BigNumber
console.log(balance.toString(10)); // '1000000000000'
console.log(balance.toNumber()); // 1000000000000

