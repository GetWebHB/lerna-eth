const { ethers } = require("ethers");
const getProviders = require("./utils/getProviders");

const { provider_eth } = getProviders();

// 合约地址
const addressUSDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
// 交易所地址
const accountBinance = "0x28C6c06298d514Db089934071355E5743bf21d60";
const abi = [
  "event Transfer(address indexed from, address indexed to, uint value)",
  "function balanceOf(address) public view returns(uint)",
];

const contract = new ethers.Contract(addressUSDT, abi, provider_eth);

async function main() {
  // const balance = await contract.balanceOf(accountBinance);
  // console.log(ethers.formatUnits(balance, 6));

  // 1. 创建过滤器事件（to Binance）
  const filterBinanceIn = contract.filters.Transfer(null, accountBinance);
  console.log("detail", filterBinanceIn);
  contract.on(filterBinanceIn, ([from, to, value]) => {
    console.log(`${from} -> ${to} -> ${ethers.formatUnits(value, 6)}`);
  });

  // out binance
  const filterBinanceOut = contract.filters.Transfer(accountBinance);
  console.log("detail", filterBinanceOut);
  contract.on(filterBinanceOut, ([from, to, value]) => {
    console.log(`${from} -> ${to} -> ${ethers.formatUnits(value, 6)}`);
  });
}

main();
