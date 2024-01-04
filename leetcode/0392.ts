// https://leetcode.com/problems/is-subsequence
function isSubsequence(s: string, t: string): boolean {
    let i = 0
    for (let j = 0; j < t.length; j++) {
        if (i >= s.length) return true
        if (t[j] === s[i]) i++
    }
    return i >= s.length
}
