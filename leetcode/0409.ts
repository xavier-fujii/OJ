// https://leetcode.com/problems/longest-palindrome

function longestPalindrome(s: string): number {
    let chars = new Set<string>()
    let length = 0
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (chars.has(c)) {
            chars.delete(c)
            length += 2
        } else {
            chars.add(c)
        }
    }
    if (chars.size > 0) length++
    return length
}
