function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let arr: { num: number; count: number }[] = []
    for (const num of nums) {
        if (arr.length === 0) arr.push({ num: num, count: 1 })
        else {
            const lastNum = arr[arr.length - 1]
            if (lastNum.num === num) {
                arr[arr.length - 1].count = arr[arr.length - 1].count + 1
            } else {
                arr.push({ num, count: 1 })
            }
        }
    }

    return helper(arr, 0)
}

function helper(nums: { num: number; count: number }[], sum: number): number {
    if (nums.length === 0) return sum
    let first = nums[0]

    let second = nums[1]
    nums.shift()
    if (second === undefined || second.num > first.num + first.count) {
        return helper(nums, sum + acc(first.count - 1, 0))
    } else {
        second.count = second.count + first.count + first.num - second.num
        return helper(nums, sum + acc(first.count - 1, first.count + first.num - second.num))
    }
}

function acc(a: number, b: number) {
    return ((a - b + 1) * (a + b)) / 2
}
