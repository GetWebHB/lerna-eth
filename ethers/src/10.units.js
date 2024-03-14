const { BigNumber, ethers } = require('ethers')

const n1 = BigNumber.from(1000)
const n2 = BigNumber.from('10000')
const n3 = Number.MAX_SAFE_INTEGER
// const n4 = BigNumber.from(n3)

// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)

// console.log(n1.add(1))
// console.log(n1.sub(1))
// console.log(n1.mul(1))
// console.log(n1.div(1))
// console.log('is eq', n1.eq(1000))

// formatUnits wei -> ether
console.log('wei:', ethers.utils.formatUnits(n2, 0))
console.log('gwei:', ethers.utils.formatUnits(n2, 'gwei'))
console.log('ether:', ethers.utils.formatUnits(n2, 'ether'))

// formatEther wei -> ether
console.log('wei', ethers.utils.formatEther(n1))
// parseEther ether -> wei
console.log('eth', ethers.utils.parseUnits('1').toString())
