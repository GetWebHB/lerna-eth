const { ethers } = require("ethers");
const { PRIVATE_KEY } = require("../../../wallet/config");

function getWallet(provider) {
  return new ethers.Wallet(PRIVATE_KEY, provider);
}

module.exports = getWallet;
