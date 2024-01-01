// https://leetcode.com/problems/product-of-array-except-self
function productExceptSelf(nums: number[]): number[] {
    const leftToRight = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        leftToRight[i] = nums[i - 1] * leftToRight[i - 1]
    }

    const rightToLeft = new Array(nums.length).fill(1)
    for (let i = nums.length - 2; i >= 0; i--) {
        rightToLeft[i] = nums[i + 1] * rightToLeft[i + 1]
    }

    const result = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftToRight[i] * rightToLeft[i]
    }

    return result
}
