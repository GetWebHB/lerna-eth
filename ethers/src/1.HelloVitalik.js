const { ethers } = require('ethers')

const provider = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com')

async function main() {
  const balance = await provider.getBalance('vitalik.eth')
  const eth = ethers.utils.formatEther(balance)
  console.log(eth)
}

main()
