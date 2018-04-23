var Web3 = require("web3")
let web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))
var hello = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "hello",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pay",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}
]);
var helloIstance = hello.at('0xa0e2cd936b4f408f19ed5e11c48082de3d2ca7b0');
helloIstance.pay({
    from: web3.eth.accounts[0],
    value: web3.toWei(10, "ether")
}, function(err, result) {
    if(err)
        console.log("Error: " + err);
    else
        console.log("Result: " + result);
});