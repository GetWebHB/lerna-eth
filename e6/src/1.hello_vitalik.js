const { ethers } = require("ethers");
const { ETH_MAIN_URL } = require("../config");

// const provider = ethers.getDefaultProvider();
const provider = new ethers.JsonRpcProvider(ETH_MAIN_URL);

async function main() {
  const balance = await provider.getBalance("vitalik.eth");
  console.log("balance:", ethers.formatEther(balance));
}
main();
