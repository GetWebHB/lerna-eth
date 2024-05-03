const providers = require("./utils/getProviders");

const { provider_eth_wss } = providers();

async function main() {
  let i = 0;
  provider_eth_wss.on("pending", (txHash) => {
    if (i++ < 100) {
      console.log(`${new Date().toLocaleTimeString()} ${i} ${txHash}`);
    }
  });
}

main();
