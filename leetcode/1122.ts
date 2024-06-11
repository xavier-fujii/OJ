// https://leetcode.com/problems/relative-sort-array/description

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let dict: Record<string, number> = {}
    arr2.forEach((ele, idx) => {
        dict[ele] = idx
    })
    arr1.sort((a, b) => {
        let aIdx = dict[a]
        let bIdx = dict[b]
        if (aIdx !== undefined && bIdx !== undefined) {
            return aIdx - bIdx
        } else if (aIdx === undefined && bIdx !== undefined) {
            return 1
        } else if (aIdx !== undefined && bIdx === undefined) {
            return -1
        } else {
            return a - b
        }
    })

    return arr1
}
