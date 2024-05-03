const { ethers } = require("ethers");
const providers = require("./utils/getProviders");
const getWallet = require("./utils/getWallet");

const { provider_eth } = providers();
const wallet = getWallet(provider_eth);

// DAI的ABI
const abiDAI = [
  "function balanceOf(address) public view returns(uint)",
  "function transfer(address, uint) public returns (bool)",
];
// DAI合约地址（主网）
const addressDAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract

const contractDAI = new ethers.Contract(addressDAI, abiDAI, provider_eth); // provider: r wallet: w
const contractDAIWrite = new ethers.Contract(addressDAI, abiDAI, wallet);

async function main() {
  // const balanceOf = await contractDAI.balanceOf(wallet);
  // console.log(ethers.formatEther(balanceOf));

  const siginal = await contractDAI.transfer.staticCall(
    "vitalik.eth",
    ethers.parseEther("1.0"),
    { from: provider_eth.resolveName("vitalik.eth") }
  );
  console.log(siginal);

  const addr = await wallet.getAddress();
  const s2 = await contractDAI.transfer.staticCall(
    addr,
    ethers.parseEther("10"),
    { from: addr }
  );
  console.log(s2);
}

main();
