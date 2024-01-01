// https://leetcode.com/problems/rotate-array
function rotate(nums: number[], k: number): void {
    const k_real = k % nums.length
    const intermediate = nums.slice(0, nums.length - k_real)
    for (let i = 0; i < k_real; i++) {
        nums[i] = nums[i + nums.length - k_real]
    }
    for (let i = k_real; i < nums.length; i++) {
        nums[i] = intermediate[i - k_real]
    }
}
