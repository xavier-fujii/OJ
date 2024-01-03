// https://leetcode.com/problems/longest-common-prefix
function longestCommonPrefix(strs: string[]): string {
    let idx = -1
    for (let i = 0; i < strs[0].length; i++) {
        if (strs.every((s) => !!s[i] && s[i] === strs[0][i])) {
            idx = i
        } else {
            return strs[0].slice(0, idx + 1)
        }
    }

    return strs[0].slice(0, idx + 1)
}

longestCommonPrefix(["flower", "flow", "flight"])
