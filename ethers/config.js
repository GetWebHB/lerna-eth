const ETH_MAIN_URL = 'https://eth.llamarpc.com'
// const ETH_TEST_URL = 'https://goerli.gateway.tenderly.co'
const ETH_TEST_URL = 'https://eth-sepolia.api.onfinality.io/public'
const CONTRACT_ADDRESS_WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
const CONTRACT_ADDRESS_TEST_WETH = '0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9'
const PHRASE = 'relax light render venture eager unaware craft nurse rabbit humble sport source'
const PRIVATE_KEY = '0x42ea82ce040c77ddf920e6b125789932c23dcae7d2b91b0a6ff4b5ffffe53fff'
const ADDRESS = '0x2adcb79Ed77ACa130EA47e66031C7C75272EE23d' // 注释的： PHRASE === PRIVATE_KEY

const abiWETH = [
  'function balanceOf(address) public view returns(uint)',
  'function deposit() public payable',
  'function transfer(address, uint) public returns (bool)',
  'function withdraw(uint) public',
]

module.exports = { ETH_MAIN_URL, ETH_TEST_URL, CONTRACT_ADDRESS_WETH, CONTRACT_ADDRESS_TEST_WETH, PHRASE, PHRASE, PRIVATE_KEY, ADDRESS, abiWETH }
