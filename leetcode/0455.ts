// https://leetcode.com/problems/assign-cookies
function findContentChildren(g: number[], s: number[]): number {
    const g1 = g.sort((a, b) => a - b)
    const s1 = s.sort((a, b) => a - b)
    let contentNumber = 0
    let i = 0
    let j = 0
    while (i < g.length && j < s.length) {
        if (g1[i] <= s1[j]) {
            contentNumber++
            i++
            j++
        } else {
            j++
        }
    }

    return contentNumber
}
