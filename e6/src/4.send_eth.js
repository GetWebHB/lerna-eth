/*
  class wallet extends signer
*/
const { ethers } = require("ethers");
const getProviders = require("../src/utils/getProviders");
const { PRIVATE_KEY } = require("../../wallet/config");

// const PRIVATE_KEY =
//   "0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b";

const { provider_sepolia } = getProviders();

// 1. 创建随机钱包
const w1 = ethers.Wallet.createRandom();

// 2. 通过私钥创建
const w2 = new ethers.Wallet(PRIVATE_KEY, provider_sepolia);
// console.log(w2);

// 3. 通过助记词
const w3 = ethers.Wallet.fromPhrase(
  "myth tired private polar cradle buffalo velvet antique impose neck young what"
);

async function main() {
  // const d1 = await w1.getAddress();
  // const d2 = await w2.getAddress();
  // const d3 = await w3.getAddress();
  // console.log(d1);
  // console.log(d2);
  // console.log(d3);
  // get private key
  // console.log(w3.privateKey);
  // const count = await provider_sepolia.getTransactionCount(w2)
  // console.log(count)

  console.log("send before:");
  console.log(
    "ice:",
    ethers.formatEther(await provider_sepolia.getBalance(w3))
  );
  console.log(
    "chain:",
    ethers.formatEther(await provider_sepolia.getBalance(w2))
  );

  // 构造交易对象
  const tx = {
    to: w3.getAddress(),
    value: ethers.parseEther("0.0008"),
  };
  console.log(tx);
  const receipt = await w2.sendTransaction(tx);
  await receipt.wait(); // 等待上链
  console.log("票据", receipt);

  console.log("send after:");
  console.log(
    "ice:",
    ethers.formatEther(await provider_sepolia.getBalance(w3))
  );
  console.log(
    "chain:",
    ethers.formatEther(await provider_sepolia.getBalance(w2))
  );
}

main();
