const { ethers } = require("ethers");
const providers = require("./utils/getProviders");
const getWallet = require("./utils/getWallet");
const ABI = require("./abi/WETH.json");
const { WETH_CONTRACT } = require("../../wallet/config");

const { provider_sepolia } = providers();
const wallet = getWallet(provider_sepolia);

const contract = new ethers.Contract(WETH_CONTRACT, ABI, wallet);

async function getBalance() {
  const address = await wallet.getAddress();

  const p1 = contract.interface.encodeFunctionData("balanceOf", [address]);

  const tx = {
    to: address,
    data: p1,
  };
  console.log(tx);
  const balanceWETH = await provider_sepolia.call(tx);
  console.log(balanceWETH);
  // console.log("balance:", ethers.formatEther(balanceWETH));
}
// main();

async function deposit() {
  const address = await wallet.getAddress();
  const p2 = contract.interface.encodeFunctionData("deposit");
  const tx = {
    to: address,
    data: p2,
    value: ethers.parseEther("0.0001"),
  };
  const receipt = await wallet.sendTransaction(tx);
  console.log("chain wating...");
  await receipt.wait();
  console.log(receipt);
  getBalance();
}

deposit();
