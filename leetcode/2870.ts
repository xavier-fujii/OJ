// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty

function minOperations(nums: number[]): number {
    const r = new Map<number, number>()
    for (const num of nums) {
        const count = r.get(num) ?? 0
        r.set(num, count + 1)
    }

    let pass = true
    let sum = 0
    for (const count of r.values()) {
        if (count === 1) {
            pass = false
        } else {
            sum += calc(count)
        }
    }

    if (pass) {
        return sum
    } else {
        return -1
    }
}

function calc(count: number) {
    if (count === 0) {
        return 0
    }

    const threeNumber = Math.floor(count / 3)
    const remain = count % 3
    if (remain === 0) {
        return threeNumber
    } else if (remain === 1) {
        return threeNumber + 1
    } else {
        return threeNumber + 1
    }
}
