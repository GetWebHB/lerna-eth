const { ethers } = require('ethers')
const { ETH_MAIN_URL, ETH_TEST_URL, PHRASE } = require('../../config')

const providerMain = new ethers.providers.JsonRpcProvider(ETH_MAIN_URL)
const providerTest = new ethers.providers.JsonRpcProvider(ETH_TEST_URL)

const iceWallet = new ethers.Wallet.fromMnemonic(PHRASE)
const iceWalletTestWithProvider = iceWallet.connect(providerTest)

module.exports = {
  ethers,
  providerMain,
  providerTest,
  iceWallet,
  iceWalletTestWithProvider,
}
