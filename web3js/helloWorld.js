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
var helloIstance = hello.at('0xdc7b0c806d2662b59374fa96775eeaee372533d4');
console.log(helloIstance.hello());