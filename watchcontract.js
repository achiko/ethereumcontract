var Web3 = require('Web3');

if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));


var lockmyetherContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getTrickleBlock","outputs":[{"name":"TrickleBlock","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"Balance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_blocknumber","type":"uint256"}],"name":"setExpirationBlock","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getTrickle","outputs":[{"name":"Trickle","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"withdrawFees","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getExpirationBlock","outputs":[{"name":"ExpirationBlock","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getLatestBlock","outputs":[{"name":"BlockNumber","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getFeeBalance","outputs":[{"name":"FeeBalance","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"setTrickleOn","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"main","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"setTrickleOff","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}]);
var myContractInstance = lockmyetherContract.at('0x3f4d6246bd11297be47e6ab1c2b1b72559c68a82');

// myContractInstance.main.sendTransaction({

//             from: web3.eth.coinbase,
//             gas: 2000000

//     }, function (err, data) {
//             console.log('err : ', err);
//             console.log('data : ', data.toString());
//             console.log('data : ', data);
//  });


myContractInstance.allEvents().watch(function(err, resp){
    if (!err) {
        console.log( "Live events from the blockchain!", resp)
    } else {
        console.log( err)
    }
})
