// https://leetcode.com/problems/length-of-last-word
function lengthOfLastWord(s: string): number {
    const sA = s.trim().split(" ")
    return sA[sA.length - 1].length
}
