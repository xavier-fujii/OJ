// https://leetcode.com/problems/remove-element
function removeElement(nums: number[], val: number): number {
    let s = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            // do nothing
        } else {
            nums[s] = nums[i]
            s++
        }
    }
    return s
}
