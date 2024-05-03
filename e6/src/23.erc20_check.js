const { VE_ZK_CONTRACH } = require("../config");
const getProviders = require("./utils/getProviders");
const { checkERC20 } = require("./utils");

const { provider_sepolia } = getProviders();

async function main() {
  const isERC20_1 = await checkERC20(VE_ZK_CONTRACH, provider_sepolia);
  console.log(isERC20_1);

  const isERC20_2 = await checkERC20(
    "0xf6b92ee0935c8f8e9a78e6bfa40bc4e703600e1a",
    provider_sepolia
  );
  console.log(isERC20_2);
}

main();
