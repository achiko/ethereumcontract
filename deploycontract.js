var Web3 = require('Web3');

if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));


var profilebaseContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"age","type":"int256"},{"name":"speciality","type":"string"},{"name":"twitter","type":"string"},{"name":"github","type":"string"},{"name":"linkedin","type":"string"}],"name":"updateProfile","outputs":[{"name":"res","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"remove","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"profiles","outputs":[{"name":"name","type":"string"},{"name":"age","type":"int256"},{"name":"speciality","type":"string"},{"name":"twitter","type":"string"},{"name":"github","type":"string"},{"name":"linkedin","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"getProfile","outputs":[{"name":"name","type":"string"},{"name":"age","type":"int256"},{"name":"speciality","type":"string"},{"name":"twitter","type":"string"},{"name":"github","type":"string"},{"name":"linkedin","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"age","type":"int256"},{"name":"speciality","type":"string"},{"name":"twitter","type":"string"},{"name":"github","type":"string"},{"name":"linkedin","type":"string"}],"name":"createProfile","outputs":[{"name":"res","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var profilebase = profilebaseContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6115138061003f6000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806370271f3514610065578063a7f43779146101f4578063bbe1562714610203578063d6afc9b1146104dc578063eb850c13146106da57610063565b005b6101de6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061105f565b6040518082815260200191505060405180910390f35b610201600480505061147f565b005b6102196004808035906020019091905050610869565b60405180806020018781526020018060200180602001806020018060200186810386528c8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102b85780601f1061028d576101008083540402835291602001916102b8565b820191906000526020600020905b81548152906001019060200180831161029b57829003601f168201915b505086810385528a81815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561033b5780601f106103105761010080835404028352916020019161033b565b820191906000526020600020905b81548152906001019060200180831161031e57829003601f168201915b50508681038452898181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b50508681038352888181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b50508681038252878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104c45780601f10610499576101008083540402835291602001916104c4565b820191906000526020600020905b8154815290600101906020018083116104a757829003601f168201915b50509b50505050505050505050505060405180910390f35b6104e96004805050610c75565b60405180806020018781526020018060200180602001806020018060200186810386528c8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561055f5780820380516001836020036101000a031916815260200191505b5086810385528a8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105b85780820380516001836020036101000a031916815260200191505b508681038452898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106115780820380516001836020036101000a031916815260200191505b508681038352888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561066a5780820380516001836020036101000a031916815260200191505b508681038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156106c35780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390f35b6108536004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506108b5565b6040518082815260200191505060405180910390f35b6001600050602052806000526040600020600091509050806000016000509080600101600050549080600201600050908060030160005090806004016000509080600501600050905086565b60006000600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050905087816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061093b57805160ff191683800117855561096c565b8280016001018555821561096c579182015b8281111561096b57825182600050559160200191906001019061094d565b5b5090506109979190610979565b808211156109935760008181506000905550600101610979565b5090565b505086816001016000508190555085816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109f657805160ff1916838001178555610a27565b82800160010185558215610a27579182015b82811115610a26578251826000505591602001919060010190610a08565b5b509050610a529190610a34565b80821115610a4e5760008181506000905550600101610a34565b5090565b505084816003016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610aa557805160ff1916838001178555610ad6565b82800160010185558215610ad6579182015b82811115610ad5578251826000505591602001919060010190610ab7565b5b509050610b019190610ae3565b80821115610afd5760008181506000905550600101610ae3565b5090565b505083816004016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610b5457805160ff1916838001178555610b85565b82800160010185558215610b85579182015b82811115610b84578251826000505591602001919060010190610b66565b5b509050610bb09190610b92565b80821115610bac5760008181506000905550600101610b92565b5090565b505082816005016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0357805160ff1916838001178555610c34565b82800160010185558215610c34579182015b82811115610c33578251826000505591602001919060010190610c15565b5b509050610c5f9190610c41565b80821115610c5b5760008181506000905550600101610c41565b5090565b505060019150610c6a565b509695505050505050565b6020604051908101604052806000815260200150600060206040519081016040528060008152602001506020604051908101604052806000815260200150602060405190810160405280600081526020015060206040519081016040528060008152602001506000600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050905080600001600050816001016000505482600201600050836003016000508460040160005085600501600050858054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dce5780601f10610da357610100808354040283529160200191610dce565b820191906000526020600020905b815481529060010190602001808311610db157829003601f168201915b50505050509550838054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b50505050509350828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f065780601f10610edb57610100808354040283529160200191610f06565b820191906000526020600020905b815481529060010190602001808311610ee957829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610fa25780601f10610f7757610100808354040283529160200191610fa2565b820191906000526020600020905b815481529060010190602001808311610f8557829003601f168201915b50505050509150808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561103e5780601f106110135761010080835404028352916020019161103e565b820191906000526020600020905b81548152906001019060200180831161102157829003601f168201915b50505050509050965096509650965096509650611056565b50909192939495565b60006000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110c35760009150611474565b600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050905087816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061114557805160ff1916838001178555611176565b82800160010185558215611176579182015b82811115611175578251826000505591602001919060010190611157565b5b5090506111a19190611183565b8082111561119d5760008181506000905550600101611183565b5090565b505086816001016000508190555085816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061120057805160ff1916838001178555611231565b82800160010185558215611231579182015b82811115611230578251826000505591602001919060010190611212565b5b50905061125c919061123e565b80821115611258576000818150600090555060010161123e565b5090565b505084816003016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106112af57805160ff19168380011785556112e0565b828001600101855582156112e0579182015b828111156112df5782518260005055916020019190600101906112c1565b5b50905061130b91906112ed565b8082111561130757600081815060009055506001016112ed565b5090565b505083816004016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061135e57805160ff191683800117855561138f565b8280016001018555821561138f579182015b8281111561138e578251826000505591602001919060010190611370565b5b5090506113ba919061139c565b808211156113b6576000818150600090555060010161139c565b5090565b505082816005016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061140d57805160ff191683800117855561143e565b8280016001018555821561143e579182015b8281111561143d57825182600050559160200191906001019061141f565b5b509050611469919061144b565b80821115611465576000818150600090555060010161144b565b5090565b505060019150611474565b509695505050505050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561151057600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b56', 
     gas: 3000000
   }, function(e, contract){
    console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })