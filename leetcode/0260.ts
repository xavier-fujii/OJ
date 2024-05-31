function findOneIndex(n: number) {
    for (let i = 0; i <= 32; i++) {
        if ((n & (1 << i)) === 1 << i) {
            return i
        }
    }
    return 0
}

function singleNumber(nums: number[]): number[] {
    let xorResult = nums.reduce((acc, cur) => acc ^ cur, 0)
    const idx = findOneIndex(xorResult)
    let n1 = 0
    let n2 = 0
    for (const n of nums) {
        if ((n & (1 << idx)) === 1 << idx) {
            n1 = n1 ^ n
        } else {
            n2 = n2 ^ n
        }
    }

    return [n1, n2]
}
