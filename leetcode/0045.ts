// https://leetcode.com/problems/jump-game-ii/

function jump(nums: number[]): number {
    if (nums.length === 0 || nums.length === 1) return 0
    let numberOfJump = 0
    let i = 0
    while (i < nums.length) {
        const reachableStart = i + 1
        const reachableEnd = i + nums[i]
        if (reachableStart > reachableEnd) break
        if (reachableEnd >= nums.length - 1) {
            numberOfJump++
            break
        }

        const nextI = findPeak(nums, reachableStart, reachableEnd)
        if (i !== nextI) {
            i = nextI
            numberOfJump++
        }
    }

    return numberOfJump
}

function findPeak(nums: number[], start: number, end: number) {
    let peakIdx = start
    for (let i = start; i <= end; i++) {
        if (nums[i] + i >= nums[peakIdx] + peakIdx) {
            peakIdx = i
        }
    }

    return peakIdx
}
