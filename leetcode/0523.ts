// https://leetcode.com/problems/continuous-subarray-sum/

function checkSubarraySum(nums: number[], k: number): boolean {
    const sums: number[] = [0]

    for (const num of nums) {
        if (sums.length === 0) {
            sums.push(num % k)
        } else {
            const last = sums[sums.length - 1]
            sums.push((last + num) % k)
        }
    }

    let dict = new Map<number, Array<number>>()
    for (const [index, sum] of sums.entries()) {
        const indexes = dict.get(sum)

        if (indexes === undefined) {
            dict.set(sum, [index])
        } else if (indexes.length < 3) {
            dict.set(sum, indexes.concat(index))
        }
    }

    for (const [_s, indexes] of dict.entries()) {
        if (indexes.length > 2) return true
        if (indexes.length === 2 && Math.abs(indexes[0] - indexes[1]) > 1) return true
    }
    return false
}
