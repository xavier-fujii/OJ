// https://leetcode.com/problems/sum-of-all-subset-xor-totals

function allSubsets(nums: number[]): number[] {
    if (nums.length === 0) return []
    const [first, ...rest] = nums
    const restSubsets = allSubsets(rest)
    return restSubsets.concat(
        restSubsets.map((n) => n ^ first),
        first
    )
}

function subsetXORSum(nums: number[]): number {
    const subsets = allSubsets(nums)
    return subsets.reduce((acc, cur) => acc + cur, 0)
}
