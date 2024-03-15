const { PRIVATE_KEY } = require('../config')
const { providerMain, ethers } = require('./utils/getProvider')

const wallet = new ethers.Wallet(PRIVATE_KEY, providerMain)

const abiDAI = ['function balanceOf(address) public view returns(uint)', 'function transfer(address, uint) public returns (bool)']
const addressDAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const contractDAI = new ethers.Contract(addressDAI, abiDAI, providerMain)

async function main() {
  const address = await wallet.getAddress()
  const balanceDAI = await contractDAI.balanceOf(address)

  const tx = await contractDAI.callStatic.transfer(address, ethers.utils.parseEther('1000'), { from: address })
  console.log('tx:', tx)
}

main()
