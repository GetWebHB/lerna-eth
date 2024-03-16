const ethers = require('ethers')
const { PHRASE } = require('../config')

// 1.创建HD钱包
const hdNode = ethers.utils.HDNode.fromMnemonic(PHRASE)
console.log(hdNode)

// 2. 派生20个钱包
const numWal = 20
let basePath = "m/44'/60'/0'/0"
for (let i = 0; i < numWal; i++) {
  let hdNodeNew = hdNode.derivePath(basePath + '/' + i)
  let walletNew = new ethers.Wallet(hdNodeNew.privateKey)
  console.log(`第${i + 1}个钱包地址： ${walletNew.address}`)
}

