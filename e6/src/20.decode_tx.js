const { ethers } = require("ethers");
const providers = require("./utils/getProviders");
const throttle = require("./utils/throttle");
const { handleBigInt } = require("./utils");

const { provider_eth_wss } = providers();

const iface = new ethers.Interface([
  "function transfer(address, uint) public returns (bool)",
]);

const selector = iface.getFunction("transfer").selector;
console.log(`函数选择器是: ${selector}`);

async function main() {
  provider_eth_wss.on(
    "pending",
    throttle(async function (txHash) {
      const tx = await provider_eth_wss.getTransaction(txHash);
      // data -> hax
      if (tx && tx.data.indexOf(selector) !== -1) {
        console.log(
          JSON.stringify(iface.parseTransaction(tx), handleBigInt, 2)
        );
      }
    }, 1000)
  );
}

main();
