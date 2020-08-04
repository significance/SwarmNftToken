pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SwarmBOSNFT is ERC721 {
    constructor() public ERC721("Swarm Peace", "SWP") {}

    function mintToken(
        address receiver,
        uint256 serial,
        string memory tokenURI
    ) public returns (uint256) {
        _mint(receiver, serial);
        _setTokenURI(serial, tokenURI);
        return serial;
    }
}
