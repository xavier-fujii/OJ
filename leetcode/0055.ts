// https://leetcode.com/problems/jump-game
function canJump(nums: number[]): boolean {
    let curFurthestIdx = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > curFurthestIdx) break
        curFurthestIdx = Math.max(curFurthestIdx, nums[i] + i)
    }

    const result = curFurthestIdx >= nums.length - 1
    return result
}

canJump([2, 3, 1, 1, 4])
