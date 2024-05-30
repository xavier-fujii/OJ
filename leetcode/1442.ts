// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor

function countTriplets(arr: number[]): number {
    let dict: Record<number, Record<number, number>> = {}
    arr.forEach((_, idx) => {
        dict[idx] = {
            [idx + 1]: arr[idx],
        }
    })
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (j !== i + 1) {
                dict[i][j] = dict[i][j - 1] ^ arr[j - 1]
                if (dict[i][j] === 0) {
                    sum += j - i - 1
                }
            }
        }
    }
    return sum
}
