const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CrazyNFT = await hre.ethers.getContractFactory("CrazyNFT");

  const crazyNft = await CrazyNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await crazyNft.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
