const { providerMain, ethers } = require('./utils/getProvider')

const addressBAYC = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
const abiERC721 = ['function name() view returns (string)', 'function symbol() view returns (string)', 'function supportsInterface(bytes4) public view returns(bool)']

const contractBAYC = new ethers.Contract(addressBAYC, abiERC721, providerMain)

async function main() {
  const name = await contractBAYC.name()
  const symbol = await contractBAYC.symbol()
  const selectorERC721 = '0x80ac58cd'

  console.log('name:', name)
  console.log('symbol:', symbol)
  console.log(await contractBAYC.supportsInterface(selectorERC721))
}
main()
