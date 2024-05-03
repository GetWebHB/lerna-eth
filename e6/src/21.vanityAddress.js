const { ethers } = require("ethers");

const reg = /^0x000.*000/;
let isVaild = false;
let wallet = null;

while (!isVaild) {
  wallet = ethers.Wallet.createRandom();
  if (reg.test(wallet.address)) {
    isVaild = true;
  }
}

console.log(wallet.address);
console.log(wallet.privateKey);
