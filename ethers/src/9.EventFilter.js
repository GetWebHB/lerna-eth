const { providerMain, ethers } = require('./utils/getProvider')

const contractUSDTAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
const accountBinance = '0x28C6c06298d514Db089934071355E5743bf21d60'
const abi = ['event Transfer(address indexed from, address indexed to, uint value)', 'function balanceOf(address) public view returns(uint)']

const contractUSDT = new ethers.Contract(contractUSDTAddress, abi, providerMain)

async function main() {
  const banance = await contractUSDT.balanceOf(accountBinance)
  // console.log(ethers.utils.formatUnits(banance, 6))
  const filterBinanceIn = contractUSDT.filters.Transfer(null, accountBinance)
  const filterBinanceOut = contractUSDT.filters.Transfer(accountBinance, null)
  console.log('filter detail')
  console.log(filterBinanceIn)
  contractUSDT
    .on(filterBinanceIn, (from, to, value) => {
      console.log('-------usdt进入交易所------')
      console.log(`${from}->${to}`, ethers.utils.formatUnits(value, 6))
    })
    .on('error', (err) => {
      console.log(err)
    })

    contractUSDT
    .on(filterBinanceOut, (from, to, value) => {
      console.log('-------usdt转出交易所------')
      console.log(`${from}->${to}`, ethers.utils.formatUnits(value, 6))
    })
    .on('error', (err) => {
      console.log(err)
    })
}

main()
