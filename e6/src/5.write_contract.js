const { ethers } = require("ethers");
const getProviders = require("./utils/getProviders");
const getWallet = require("./utils/getWallet");
const { WETH_CONTRACH, PRIVATE_KEY, ADDRESS } = require("../config");
const ABI = require("./abi/WETH.json");

const { provider_sepolia } = getProviders();

const contractWETH = new ethers.Contract(
  WETH_CONTRACH,
  ABI,
  getWallet(provider_sepolia)
);

async function main() {
  const balance = await contractWETH.balanceOf(ADDRESS);
  console.log("before balance:", ethers.formatEther(balance));

  // 1 ETH -> 1 WETH
  const tx = await contractWETH.deposit({ value: ethers.parseEther("0.0001") });
  await tx.wait();
  console.log("tx detail", tx);

  const afterBalance = await contractWETH.balanceOf(ADDRESS);
  console.log("after balance:", ethers.formatEther(afterBalance));
}
// main();

async function transfer() {
  const tx = await contractWETH.transfer(
    "0x46E0D51feb1BDCFA2BC091A968D0E7FA314C563e",
    ethers.parseEther("0.0001")
  );
  await tx.wait();

  const iceBalance = await contractWETH.balanceOf(
    "0x46E0D51feb1BDCFA2BC091A968D0E7FA314C563e"
  );
  console.log("iceBalance:", ethers.formatEther(iceBalance));
}
transfer();
