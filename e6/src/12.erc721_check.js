const { ethers } = require("ethers");
const getProviders = require("./utils/getProviders");

const { provider_eth } = getProviders();

// 合约abi
const abiERC721 = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function supportsInterface(bytes4) public view returns(bool)",
];
// ERC721的合约地址，这里用的BAYC
const addressBAYC = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

const contractERC721 = new ethers.Contract(
  addressBAYC,
  abiERC721,
  provider_eth
);

const selectorERC721 = "0x80ac58cd";

async function main() {
  const symbol = await contractERC721.symbol();
  const name = await contractERC721.name();
  const siginal = await contractERC721.supportsInterface(selectorERC721);

  console.log(`symbol: ${symbol} name: ${name}`);
  console.log(`siginal: ${siginal}`);
}

main();
