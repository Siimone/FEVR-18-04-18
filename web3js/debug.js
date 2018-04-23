var moment = require("moment");
// We need Web3.js library
var Web3 = require("web3");
// Let's create the Object
let web3 = new Web3();
// Setting the provider
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
// Save block
var block = web3.eth.getBlock(1);
// Printing some data about it
console.log("Timestamp: " + block.timestamp + " = " + moment.unix(block.timestamp).toString());
for(var i=0; i < block.transactions.length; i++) {
	console.log("Transaction [" + i + "]: " + block.transactions[i]);
	var txData = web3.eth.getTransaction(block.transactions[i]);
	console.log("\tFrom: " + txData.from);
	console.log("\tTo: " + txData.to);
	console.log("\tValue: " + web3.fromWei(txData.value))
}
