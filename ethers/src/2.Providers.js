const { ethers, BigNumber } = require('ethers')
const { ETH_MAIN_URL, ETH_TEST_URL } = require('../config')

const providerEth = new ethers.providers.JsonRpcProvider(ETH_MAIN_URL)
const providerGoerli = new ethers.providers.JsonRpcProvider(ETH_TEST_URL)

async function main() {
  const balanceEth = await providerEth.getBalance('vitalik.eth')
  const balanceGoerli = await providerGoerli.getBalance('vitalik.eth')

  console.log(`main: `, ethers.utils.formatEther(balanceEth))
  console.log(`test: `, ethers.utils.formatEther(balanceGoerli))
}
// main()

async function getChainInfo() {
  providerEth.getNetwork().then((res) => console.log('network', res))
  providerEth.getBlockNumber().then((res) => console.log('blockNumber', res))
  providerEth.getGasPrice().then((res) => {
    console.log('gas', res.toNumber())
  })
  providerEth.getFeeData().then((res) => {
    console.log('freeGas', res)
  })
  providerEth.getBlock(0).then((res) => {
    console.log('block', res)
  })
  // 根据合约地址，查询合约地址的byteCode
  providerEth.getCode('0xc778417e063141139fce010982780140aa0cd5ab').then((res) => {
    console.log('byteCode', res)
  })
}
getChainInfo()
