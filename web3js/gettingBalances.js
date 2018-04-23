// We need Web3.js library
var Web3 = require("web3");
// Let's create the Object
let web3 = new Web3();
// Setting the provider
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
// Coinbase account
var coinbase = web3.eth.coinbase;
// Wei balance
var weiBalance = web3.eth.getBalance(coinbase);
// Eth balance
var ethBalance = web3.fromWei(web3.eth.getBalance(coinbase));
// Print coinbase balance
console.log("You have:\n" + weiBalance + "wei = " + ethBalance + "eth");
// Print all account balances
function checkAllBalances() {
	var i=0; web3.eth.accounts.forEach(function(e){
		console.log("eth.accounts["+i+"]: " +  e + " \tbalance: " + web3.fromWei(web3.eth.getBalance(e), "ether") + " ether");
		i++;
	});
};
checkAllBalances();
