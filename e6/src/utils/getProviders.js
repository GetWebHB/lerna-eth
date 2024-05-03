const { ethers } = require("ethers");
const { ETH_MAIN_URL, ETH_TEST_URL, ETH_MAIN_WSS } = require("../../config");

function getProviders() {
  const provider_eth = new ethers.JsonRpcProvider(ETH_MAIN_URL);
  const provider_sepolia = new ethers.JsonRpcProvider(ETH_TEST_URL);
  const provider_eth_wss = new ethers.WebSocketProvider(ETH_MAIN_WSS);

  return {
    provider_eth_wss,
    provider_eth,
    provider_sepolia,
  };
}

module.exports = getProviders;
