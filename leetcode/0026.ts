// https://leetcode.com/problems/remove-duplicates-from-sorted-array
function removeDuplicates(nums: number[]): number {
    let last: number | null = null;
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === last) {
            // do nothing
        } else {
            last = nums[i];
            nums[idx] = last;
            idx++;
        }
    }
    return idx;
}
