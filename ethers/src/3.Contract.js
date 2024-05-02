const { ethers } = require('ethers')
const { ETH_MAIN_URL, CONTRACT_ADDRESS_WETH } = require('../config')
const weth_abi = require('../abi/weth_abi.json')

const provider = new ethers.providers.JsonRpcProvider(ETH_MAIN_URL)
const contractWETH = new ethers.Contract(CONTRACT_ADDRESS_WETH, weth_abi, provider)

async function main() {
  // 读取weth abi
  try {
    const name = await contractWETH.name()
    const symbol = await contractWETH.symbol()
    const totalSupply = await contractWETH.totalSupply()
    console.log('name', name)
    console.log('代号', symbol)
    console.log('总供给', ethers.utils.formatEther(totalSupply))
    const balanceWETH = await contractWETH.balanceOf('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045')
    console.log('持仓', ethers.utils.formatEther(balanceWETH))
  } catch (e) {
    console.log(e)
  }
}
main()
