// https://leetcode.com/problems/merge-sorted-array
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // result is not necessary, should fill nums1 from the end to begin
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < m || j < n) {
        const n1 = i === m ? Number.POSITIVE_INFINITY : nums1[i];
        const n2 = j === n ? Number.POSITIVE_INFINITY : nums2[j];
        if (n1 < n2) {
            result.push(n1);
            i++;
        } else {
            result.push(n2);
            j++;
        }
    }
    for (let k = 0; k < m + n; k++) {
        nums1[k] = result[k];
    }
}
