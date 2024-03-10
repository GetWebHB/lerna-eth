const { ethers } = require('ethers')
const { PRIVATE_KEY, CONTRACT_ADDRESS_TEST_WETH, abiWETH } = require('../config')
const { providerTest } = require('./utils/getProvider')

const wallet = new ethers.Wallet(PRIVATE_KEY, providerTest)
const contractWETH = new ethers.Contract(CONTRACT_ADDRESS_TEST_WETH, abiWETH, wallet)

async function main() {
  // const balance = await wallet.getBalance()
  // console.log(ethers.utils.formatEther(balance))
  const address = await wallet.getAddress()
  const balance = await contractWETH.balanceOf(address)
  console.log('before:', ethers.utils.formatEther(balance))
  // console.log(ethers.utils.formatEther(balance))

  // 存入
  // const tx = await contractWETH.deposit({ value: ethers.utils.parseEther('0.1') })
  // await tx.wait()
  // console.log('transaction detail')
  // console.log(tx)
  // const balanceWeth = await contractWETH.balanceOf(address)
  // console.log('after:', ethers.utils.formatEther(balanceWeth))

  // transfer
  const tx = await contractWETH.transfer('0xFC1bc696e87024cE2bF4D01c065986e86c450eE4', ethers.utils.parseEther('0.01'))
  await tx.wait()
  const balance2 = await contractWETH.balanceOf(address)
  console.log('b2,', ethers.utils.formatEther(balance2))
}
main()
