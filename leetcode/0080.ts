// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
function removeDuplicates(nums: number[]): number {
    let last: [num: number | null, occurrence: 0 | 1 | 2] = [null, 0]
    let idx = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === last[0] && last[1] !== 2) {
            last = [nums[i], last[1] === 0 ? 1 : 2]
            nums[idx] = nums[i]
            idx++
        } else if (nums[i] !== last[0]) {
            last = [nums[i], 1]
            nums[idx] = nums[i]
            idx++
        }
    }
    return idx
}
