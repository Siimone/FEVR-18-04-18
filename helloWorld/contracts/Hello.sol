pragma solidity ^0.4.17;

contract Hello {
  function hello() public pure returns(string) {
    return "Hello World!";
  }
	function pay() public payable {
  	msg.sender.send(msg.value);
  }
}