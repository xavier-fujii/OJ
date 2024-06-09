// https://leetcode.com/problems/subarray-sums-divisible-by-k/
function subarraysDivByK(nums: number[], k: number): number {
    const prefixSums = [0]
    for (const num of nums) {
        const last = prefixSums[prefixSums.length - 1]
        let nextSum = (last + num) % k
        while (nextSum < 0) {
            nextSum += k
        }
        prefixSums.push(nextSum)
    }

    let dict: Record<number, number> = {}

    for (const sum of prefixSums) {
        if (dict[sum] === undefined) {
            dict[sum] = 1
        } else {
            dict[sum] = dict[sum] + 1
        }
    }

    let result = 0
    for (const c of Object.values(dict)) {
        result += (c * (c - 1)) / 2
    }

    return result
}
