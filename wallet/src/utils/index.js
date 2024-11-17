function handleBigInt(key, value) {
  if (typeof value === "bigint") {
    return value + "n";
  }
  return value;
}

async function checkERC20(addr, provider) {
  if (addr.includes("0x")) {
    const code = await provider.getCode(addr);
    // a9059cbb: transfer 18160ddd: totalSupply
    if (code.includes("a9059cbb") && code.includes("18160ddd")) {
      return true;
    }
    return false;
  }

  return false;
}

module.exports = {
  handleBigInt,
  checkERC20,
};
