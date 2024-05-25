// https://leetcode.com/problems/the-number-of-beautiful-subsets

function beautifulSubsets(nums: number[], k: number): number {
    let len = nums.length
    let sum = 0
    let path: number[] = []

    const helper = (i: number) => {
        if (i === len) {
            if (path.length > 0) {
                sum++
            }
            return
        }
        if (nums[i] !== undefined) {
            path.push(i)
        }

        for (let j = i + 1; j < len; j++) {
            if (path.every((idx) => Math.abs(nums[j] - nums[idx]) !== k)) {
                helper(j)
                path.pop()
            }
        }
        helper(len)
    }

    helper(-1)

    return sum
}
