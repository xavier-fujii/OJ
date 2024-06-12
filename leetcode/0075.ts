// https://leetcode.com/problems/sort-colors

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i; j >= 0 && nums[j + 1] < nums[j]; j--) {
            swap(nums, j + 1, j)
        }
    }
}

function swap(nums: number[], i: number, j: number) {
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
}
