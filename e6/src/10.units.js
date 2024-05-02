const { ethers } = require("ethers");

const e = "1000000000000000000";
console.log(ethers.getBigInt(123456779));
console.log(ethers.getBigInt(e));
console.log(ethers.getBigInt("0x12345"));
// console.log(ethers.getBigInt(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.MAX_SAFE_INTEGER);

// eth  gwei -> gas wei -> 10**18

// 小 -> 大  wei -> eth
// formatUnits(变量，单位)
console.log(ethers.formatUnits(e, "ether"));

// 大 -> 小 ether -> wei
// parseUnits(变量，单位)
console.log(ethers.parseUnits("1.0").toString());
console.log(ethers.parseUnits("1.0", "gwei").toString());
