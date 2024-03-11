const { providerTest, ethers } = require('./utils/getProvider')
const { CONTRACT_ADDRESS_TEST_WETH } = require('../config')
const abi = require('../abi/weth_test_abi.json')

const contract = new ethers.Contract(CONTRACT_ADDRESS_TEST_WETH, abi, providerTest)

async function main() {
  const block = await providerTest.getBlockNumber()
  console.log(block)
  const [transferEvent] = await contract.queryFilter('Transfer', block - 100, block)
  const args = transferEvent.args
  console.log('from:', args[0], 'to:', args[1], ethers.utils.formatEther(args[2]))
}
main()
