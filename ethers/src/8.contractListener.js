const { providerMain, ethers } = require('./utils/getProvider')

const abi = ['event Transfer(address indexed from, address indexed to, uint value)']
const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7'

const contract = new ethers.Contract(address, abi, providerMain)

async function main() {
  contract.once('Transfer', (from, to, value) => {
    console.log(`from:${from} to:${to} val:${ethers.utils.formatUnits(ethers.BigNumber.from(value), 6)}`)
  })
}

main()
