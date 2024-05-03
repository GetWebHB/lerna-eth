const { ethers } = require("ethers");
const { VE_ZK_CONTRACH } = require("../config");
const providers = require("./utils/getProviders");

const { provider_sepolia, provider_eth } = providers();

// 目标合约地址: Arbitrum ERC20 bridge（主网）
const addressBridge = "0x8315177aB297bA92A06054cE80a67Ed4DBd7ed3a"; // DAI Contract
// 合约所有者 slot
const slot = `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`;

async function main() {
  // const value = await provider_sepolia.getStorage(VE_ZK_CONTRACH, 0);
  // console.log(value);

  const privateData = await provider_eth.getStorage(addressBridge, slot);
  console.log(ethers.getAddress(ethers.dataSlice(privateData, 12)));
}

main();
