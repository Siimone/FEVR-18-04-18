var Web3 = require("web3")
let web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))
var sender = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
var receiver = "0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5"
console.log("Balance before tx: " + web3.fromWei(web3.eth.getBalance(sender)) + " ether")
web3.eth.sendTransaction({
	from: sender,
	to: receiver,
	value: web3.toWei(15, "ether"),
}, function(err, txHash) {
	if(err) {
		console.log("Errore: " + err)
	} else {
		console.log("Tx hash: " + txHash)
		console.log("Balance after tx: " + web3.fromWei(web3.eth.getBalance(sender)) + " ether")
	}
})
