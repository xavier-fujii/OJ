// https://leetcode.com/problems/find-the-maximum-sum-of-node-values

function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    const numsMax = nums.map((n) => Math.max(n, n ^ k))
    const diff = nums.map((n) => n - (n ^ k))
    const miniumDiff = diff.reduce(
        (acc, cur) => Math.min(acc, Math.abs(cur)),
        Number.POSITIVE_INFINITY
    )
    const max = numsMax.reduce((acc, cur) => acc + cur, 0)

    // find a perfect number
    if (nums.some((n) => n === (n ^ k))) return max

    let changedNumber = 0
    nums.forEach((n, idx) => {
        if (n !== numsMax[idx]) {
            changedNumber++
        }
    })
    if (changedNumber % 2 === 0) return max
    else return max - miniumDiff
}
