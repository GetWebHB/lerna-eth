const { ethers } = require("ethers");
const providers = require("./utils/getProviders");
const getWallet = require("./utils/getWallet");
const contractJson = require("./abi/NFTContract.json");

const { provider_sepolia } = providers();
const wallet = getWallet(provider_sepolia);
const tokenID = "0";

async function main() {
  const address = await wallet.getAddress();

  // 1. 构造消息
  const msghash = ethers.solidityPackedKeccak256(
    ["address", "uint256"],
    [address, tokenID]
  );
  // 2. 获取字节
  const bytes = ethers.getBytes(msghash);
  // 3. 获取签名
  const sign = await wallet.signMessage(bytes);
  // 4. 合约部分
  const abiNFT = [
    "constructor(string memory _name, string memory _symbol, address _signer)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function mint(address _account, uint256 _tokenId, bytes memory _signature) external",
    "function ownerOf(uint256) view returns (address)",
    "function balanceOf(address) view returns (uint256)",
  ];
  const factoryNFT = new ethers.ContractFactory(
    abiNFT,
    contractJson.object,
    wallet
  );

  const balanceOf = await provider_sepolia.getBalance(address);

  if (ethers.formatEther(balanceOf) > 0.002) {
    // 5. 部署合约
    const contractNFT = await factoryNFT.deploy(
      "ICE Signature",
      "ICE",
      wallet.address
    );
    console.log("chain wating...");
    await contractNFT.waitForDeployment();
    // 6. mint铸造币
    console.log("mint......");
    console.log(`NFT name: ${await contractNFT.name()}`);
    console.log(`NFT symbol: ${await contractNFT.symbol()}`);
    const tx = await contractNFT.mint(address, tokenID, sign);
    console.log("tx chain....");
    await tx.wait();
    console.log(tx);
    console.log(
      "balance:",
      ethers.formatEther(await contractNFT.balanceOf(address))
    );
  } else {
    console.log("balance 不足");
  }
}

main();
