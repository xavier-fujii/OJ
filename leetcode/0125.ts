// https://leetcode.com/problems/valid-palindrome
function isPalindrome(s: string): boolean {
    const s2 = s
        .toLowerCase()
        .split("")
        .filter((k) => /[A-Za-z0-9]/.test(k))
    for (let i = 0; i < Math.floor((s2.length + 1) / 2); i++) {
        const curChar = s2[i]
        const symmetricChar = s2[s2.length - 1 - i]
        if (curChar === symmetricChar) {
            continue
        } else {
            return false
        }
    }
    return true
}
