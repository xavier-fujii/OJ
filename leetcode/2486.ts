// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence

function appendCharacters(s: string, t: string): number {
    let i = 0
    let j = 0
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++
            j++
        } else {
            i++
        }
    }

    return t.length - j
}
