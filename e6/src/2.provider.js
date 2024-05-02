const { ethers } = require("ethers");
const { ETH_MAIN_URL, ETH_TEST_URL, VE_ZK } = require("../config");

const provider = new ethers.JsonRpcProvider(ETH_MAIN_URL);
const provider_TEST = new ethers.JsonRpcProvider(ETH_TEST_URL);

async function main() {
  const balance = await provider.getBalance("vitalik.eth");
  console.log(ethers.formatEther(balance));

  const network = await provider.getNetwork();
  console.log(network.toJSON());

  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);

  const count = await provider.getTransactionCount("vitalik.eth");
  console.log(count);

  const freeData = await provider.getFeeData();
  console.log(freeData, `----`);

  const block = await provider.getBlock();
  console.log(block);

  const getCode = await provider_TEST.getCode(VE_ZK);
  console.log(getCode);
}

main();
