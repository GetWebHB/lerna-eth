const { PRIVATE_KEY } = require('../config')
const { ethers, iceWalletTestWithProvider, iceWallet, providerTest } = require('./utils/getProvider')

// 1. 随机创建wallet
const wallet1 = ethers.Wallet.createRandom()
// const wallerWithProvider = wallet.connect(provider)
// const m = wallet.mnemonic

// 2. 通过private key创建钱包
const wallet2 = new ethers.Wallet(PRIVATE_KEY)
const wallet2WithProvider = wallet2.connect(providerTest)
// console.log(wallet)

async function main() {
  const address = await iceWallet.getAddress()
  const txCount = await iceWalletTestWithProvider.getTransactionCount()
  const balance = await iceWalletTestWithProvider.getBalance()
  console.log(ethers.utils.formatEther(balance))
}

async function sendETH() {
  const address = await wallet2.getAddress()

  const tx = {
    to: address,
    value: ethers.utils.parseEther('0.1'),
  }
  console.log(tx)
  console.log('发送中...')
  const receipt = await iceWalletTestWithProvider.sendTransaction(tx)
  await receipt.wait()
  console.log(receipt)
  console.log(await iceWalletTestWithProvider.getBalance())
  console.log(await wallet2WithProvider.getBalance())
}

sendETH()

// main()
