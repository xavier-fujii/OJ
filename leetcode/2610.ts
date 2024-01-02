// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions
function findMatrix(nums: number[]): number[][] {
    const m = new Map<number, number>()
    let maxCount = 0
    for (const num of nums) {
        const count = m.get(num) ?? 0
        const newCount = count + 1
        maxCount = Math.max(newCount, maxCount)
        m.set(num, count + 1)
    }

    const result: number[][] = new Array(maxCount).fill([])
    for (let i = 0; i < result.length; i++) {
        result[i] = []
    }
    for (const [num, count] of m.entries()) {
        for (let i = 0; i < count; i++) {
            result[i].push(num)
        }
    }
    return result
}
