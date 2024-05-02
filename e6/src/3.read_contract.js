const getProviders = require("./utils/getProviders");
const { VE_ZK_CONTRACH } = require("../config");
const { ethers } = require("ethers");
const ABI = require("./abi/VE.json");

const { provider_eth, provider_sepolia } = getProviders();

// readonly
const contract = new ethers.Contract(VE_ZK_CONTRACH, ABI, provider_sepolia);

async function main() {
  const MAX_LOCK_TIME = await contract.MAX_LOCK_TIME();
  const MIN_LOCK_TIME = await contract.MIN_LOCK_TIME();
  const balanceOf = await contract.balanceOf(
    "0x9AC7421Bb573cB84709764D0D8AB1cE759416496"
  );
  const tokenAddr = await contract.zk();
  // console.log(MAX_LOCK_TIME, MIN_LOCK_TIME);

  // console.log(balanceOf);
  console.log(tokenAddr);
}

main();
