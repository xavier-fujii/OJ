// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

function twoSum(numbers: number[], target: number): number[] {
    let [i, j] = getPointers(numbers, target)
    let absL = Math.abs(numbers[i] * 2 - target)
    let absR = Math.abs(numbers[j] * 2 - target)
    while (absL !== absR) {
        if (absL < absR) {
            i--
            absL = Math.abs(numbers[i] * 2 - target)
        } else {
            j++
            absR = Math.abs(numbers[j] * 2 - target)
        }
    }
    return [i + 1, j + 1]
}

function getPointers(numbers: number[], target: number) {
    for (let k = 0; k < numbers.length - 1; k++) {
        if (numbers[k] * 2 === target && numbers[k + 1] * 2 === target) {
            return [k, k + 1]
        }
        if (numbers[k] * 2 === target) {
            return [k - 1, k + 1]
        }
        if (numbers[k] * 2 < target && numbers[k + 1] * 2 > target) {
            return [k, k + 1]
        }
    }
}
