const ethers = require("ethers");
const { ICE_PRIVATE_KEY, PHRASE } = require("../config");
// const getProviders = require("./utils/getProviders");
const { get } = require("https");
const WALLET_JSON = require("../wallet.json");

// const { provider_sepolia } = getProviders();

// publicKey -> 0x2adcb79ed77aca130ea47e66031c7c75272ee23d;

// 1. 通过 privateKey 创建钱包 -> 只能知道地址
// const wallet1 = new ethers.Wallet(
//   "0x42ea82ce040c77ddf920e6b125789932c23dcae7d2b91b0a6ff4b5ffffe53fff"
// );

// 2. 通过助记词可以知道地址和私钥 -> 私钥是 HDNodeWallet 中的
// const wallet2 = ethers.Wallet.fromPhrase(PHRASE);

// 3. 通过 json 还原

// 3.1 生成 json
// async function encrypt() {
//   const wallet = ethers.Wallet.fromPhrase(PHRASE);
//   console.log(wallet);
//   const json = await wallet.encrypt("");
//   console.log("json------------------");
//   console.log(json);
// }
// encrypt();

// 3.2 还原 json
// async function getPublicKey() {
//   console.log("--------->");
//   const wallet = await ethers.Wallet.fromEncryptedJson({"address":"2adcb79ed77aca130ea47e66031c7c75272ee23d","id":"3ac57907-2f09-48a2-966c-e5b3d65d8099","version":3,"Crypto":{"cipher":"aes-128-ctr","cipherparams":{"iv":"c41424539464b75af43dd4f7ff265ab5"},"ciphertext":"33ef7a4b608734b37fac77ee4e5fb816916783e0e1af8c9810edfefee4e7c2f0","kdf":"scrypt","kdfparams":{"salt":"919fe7b51748615e60312668775a4ded0b0b944ac6489d32c97af9102ec5cb7d","n":131072,"dklen":32,"p":1,"r":8},"mac":"72e58c8300becb822d1c61a70d321ff15d90f890685916a8b98b27e14c0e9beb"},"x-ethers":{"client":"ethers/6.13.4","gethFilename":"UTC--2024-11-12T09-57-44.0Z--2adcb79ed77aca130ea47e66031c7c75272ee23d","path":"m/44'/60'/0'/0/0","locale":"en","mnemonicCounter":"e952c10ac21ef37e9d7eb85c4980c53c","mnemonicCiphertext":"b603877599aaa451ac959bdb1bc57da0","version":"0.1"}}, "");
//   console.log(wallet);
// }
// getPublicKey();

// 4. 助记词的创建
const mnemonic = ethers.Wallet.createRandom();
console.log(mnemonic.mnemonic.phrase);
