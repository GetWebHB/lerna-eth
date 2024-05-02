const { ethers } = require("ethers");
const { ETH_MAIN_URL, ETH_TEST_URL } = require("../../config");

function getProviders() {
  const provider_eth = new ethers.JsonRpcProvider(ETH_MAIN_URL);
  const provider_sepolia = new ethers.JsonRpcProvider(ETH_TEST_URL);

  return {
    provider_eth,
    provider_sepolia,
  };
}

module.exports = getProviders;
