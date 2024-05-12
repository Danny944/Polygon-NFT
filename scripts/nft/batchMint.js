const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CrazyNFTFactory = await hre.ethers.getContractFactory("CrazyNFT");

  const crazyNft = await CrazyNFTFactory.attach(process.env.CONTRACT_ADDRESS);

  const mintTx = await crazyNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await crazyNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " Crazy NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await crazyNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const hre = require("hardhat");
// require("dotenv").config();

// const crazyNFTJson = require("../../artifacts/contracts/CrazyNFT.sol/CrazyNFT.json");
// const craxyNFTAbi = crazyNFTJson.abi;

// async function main() {
//   // const CrazyNFTFactory = await hre.ethers.getContractFactory("CrazyNFT");
//   const crazyNft = await hre.ethers.getContractAt(
//     craxyNFTAbi,
//     process.env.CONTRACT_ADDRESS
//   );
//   const mintTx = await crazyNft.safeMint(5);
//   await mintTx.wait();

//   console.log(
//     "Successfully minted: " +
//       (await crazyNft.balanceOf(process.env.WALLET_ADDRESS)) +
//       " Crazy NFTs to " +
//       process.env.WALLET_ADDRESS
//   );
//   console.log(await crazyNft.promptDescription());
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
