const { MerkleTree } = require("merkletreejs");
const { ethers } = require("ethers");
const getProviders = require("./utils/getProviders");
const getWallet = require("./utils/getWallet");
const byteCode = require("./abi/Merkle.json");

const { provider_sepolia } = getProviders();
const wallet = getWallet(provider_sepolia);

const tokens = ["0x9AC7421Bb573cB84709764D0D8AB1cE759416496"];

const abiNFT = [
  "constructor(string memory name, string memory symbol, bytes32 merkleroot)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function mint(address account, uint256 tokenId, bytes32[] calldata proof) external",
  "function ownerOf(uint256) view returns (address)",
  "function balanceOf(address) view returns (uint256)",
];

const leaf = tokens.map((e) => ethers.keccak256(e));

const merkleTree = new MerkleTree(leaf, ethers.keccak256, { sortPairs: true });
// console.log(merkleTree.toString());

const root = merkleTree.getRoot();
// console.log(root);

const proof = merkleTree.getHexProof(leaf[0]);
// console.log(proof);

async function main() {
  const factoryNFT = new ethers.ContractFactory(
    abiNFT,
    byteCode.object,
    wallet
  );
  const contract = await factoryNFT.deploy("ICE MERKLE", "ICE", root);
  console.log(contract.target);
  console.log("chain wating...");
  await contract.waitForDeployment();

  console.log("name", await contract.name());
  console.log("name", await contract.symbol());

  const tx = await contract.mint(tokens[0], "0", proof);
  await tx.wait();
  console.log(
    `mint successful addr:${tokens[0]} NFT balance: ${await contract.balanceOf(
      tokens[0]
    )}`
  );
}

main();
