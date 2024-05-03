const { ethers } = require("ethers");
const { VE_ZK_CONTRACH } = require("../config");
const providers = require("./utils/getProviders");
const getWallet = require("./utils/getWallet");

const { provider_sepolia } = providers();

const wallet = getWallet(provider_sepolia);

async function main() {
  const contractName = "VE";
  const version = "1";
  const chainId = "1";
  const spender = wallet.address;
  const number = "100";

  const domain = {
    name: contractName,
    version,
    chainId,
    verifyingContract: VE_ZK_CONTRACH,
  };

  const types = {
    Storage: [
      { name: "spender", type: "address" },
      { name: "number", type: "uint256" },
    ],
  };

  const message = {
    spender,
    number,
  };

  // EIP712 签名
  const signature = await wallet.signTypedData(domain, types, message);
  console.log("sign", signature);

  // 验证
  const eip712Signer = ethers.verifyTypedData(
    domain,
    types,
    message,
    signature
  );
  console.log("signer", eip712Signer);
}

main();
