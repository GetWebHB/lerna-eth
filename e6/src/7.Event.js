const { ethers } = require("ethers");

const API = require("./abi/WETH.json");
const getProviders = require("./utils/getProviders");
const { WETH_CONTRACT, ADDRESS } = require("../config");

const { provider_sepolia } = getProviders();

const contractWETH = new ethers.Contract(WETH_CONTRACT, API, provider_sepolia);

async function main() {
  const block = await provider_sepolia.getBlockNumber();
  const [event] = await contractWETH.queryFilter(
    "Transfer",
    block - 1000,
    block
  );
  const [from, to, amount] = event.args;
  console.log(`from: ${from} -> to: ${to}`, ethers.formatEther(amount));
}

main();
