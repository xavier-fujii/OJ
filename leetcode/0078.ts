function subsetsHelper(nums: number[]): number[][] {
    if (nums.length === 0) return []
    const [first, ...rest] = nums
    const restSubsets = subsetsHelper(rest)
    return restSubsets.concat(
        restSubsets.map((a) => a.concat(first)),
        [[first]]
    )
}

function subsets(nums: number[]): number[][] {
    return subsetsHelper(nums).concat([[]])
}
