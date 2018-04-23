var moment = require("moment");
// We need Web3.js library
var Web3 = require("web3");
// Let's create the Object
let web3 = new Web3();
// Setting the provider
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
// Save info
var info = web3.eth.getTransaction("0xd67712101706e967c7cf934e7a00d61a15b7a66828f999c6c6f42fc741f1a848");
console.log(info);
console.log(web3.toAscii(info.input))