/**
	Require 1.0.0 version
*/
var Web3 = require("web3")
let web3 = new Web3();
var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(transaction){
    console.log(transaction);
})