// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x

function specialArray(nums: number[]): number {
    for (let i = 1; i <= nums.length; i++) {
        let c = nums.reduce((acc, cur) => acc + (cur >= i ? 1 : 0), 0)
        if (c === i) return c
    }
    return -1
}
