const { ethers } = require("ethers");
const getProviders = require("./utils/getProviders");
const { USDT_CONTRACT } = require("../config");
const USDT_ABI = require("./abi/USDT.json");

const { provider_eth } = getProviders();

const contract = new ethers.Contract(USDT_CONTRACT, USDT_ABI, provider_eth);

async function main() {
  contract.on("Transfer", (from, to, value) => {
    console.log(
      `${from} -> ${to} -> ${ethers.formatUnits(ethers.getBigInt(value), 6)}`
    );
  });

  // contract.once("Transfer", (from, to, value) => {
  //   console.log(
  //     `${from} -> ${to} -> ${ethers.formatUnits(ethers.getBigInt(value), 6)}`
  //   );
  // });
}

main();
