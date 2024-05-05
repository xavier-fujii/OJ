// https://leetcode.com/problems/median-of-two-sorted-arrays

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let i = 0
    let j = 0
    let mergedArray: number[] = []
    while (i < nums1.length || j < nums2.length) {
        let n1 = nums1[i]
        let n2 = nums2[j]
        if (n1 === undefined || n1 >= n2) {
            mergedArray.push(n2)
            j++
        } else if (n2 === undefined || n1 <= n2) {
            mergedArray.push(n1)
            i++
        }
    }
    const len = mergedArray.length
    if (len % 2 === 0) {
        return (mergedArray[len / 2] + mergedArray[(len - 2) / 2]) / 2
    } else {
        return mergedArray[(len - 1) / 2]
    }
}
