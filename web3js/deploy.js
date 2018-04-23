var Web3 = require("web3")
let web3 = new Web3()
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))

var helloContract = web3.eth.contract([
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
var hello = helloContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x608060405234801561001057600080fd5b5061018c806100206000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806319ff1d21146100515780631b9265b8146100e1575b600080fd5b34801561005d57600080fd5b506100666100eb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100a657808201518184015260208101905061008b565b50505050905090810190601f1680156100d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100e9610128565b005b60606040805190810160405280600c81526020017f48656c6c6f20576f726c64210000000000000000000000000000000000000000815250905090565b3373ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050505600a165627a7a723058205d94cab619c327a8f00130abcee295375184b85cc8e7b6ba76ba67ea5fc278040029', 
     gas: '4700000'
   }, function (e, contract){
		if(e)
			console.log("Errore: " + e)
		else    
			console.log("Contract: " + JSON.stringify(contract) + '\n------------------------------------------------------------------')
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + '\ntransactionHash: ' + contract.transactionHash)
    }
})