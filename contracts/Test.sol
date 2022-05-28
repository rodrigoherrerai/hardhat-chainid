pragma solidity 0.8.9;

contract Test {
    function chain() public view returns (uint256) {
        return block.chainid;
    }
}
