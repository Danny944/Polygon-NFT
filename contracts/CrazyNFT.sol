// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract CrazyNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("CrazyNFT", "CNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmRgzbWwapfib5jXPte7Jae2HVT2eKyjgrZvohadj4pBRD/";
    }

    function promptDescription() external pure returns (string memory) {
        return "a space minion nft a 5-item collection a programmer cat nft a fadex nft";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}