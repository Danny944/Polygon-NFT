const hre = require("hardhat");

async function main() {
  const CrazyNFT = await hre.ethers.getContractFactory("CrazyNFT");

  const crazyNFT = await CrazyNFT.deploy();

  console.log("CrazyNFT deployed to: ", crazyNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
