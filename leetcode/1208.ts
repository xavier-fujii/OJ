// https://leetcode.com/problems/get-equal-substrings-within-budget/

function equalSubstring(s: string, t: string, maxCost: number) {
    const diff = s.split("").map((a, idx) => {
        return Math.abs(s.charCodeAt(idx) - t.charCodeAt(idx))
    })

    let i = 0
    let j = 0

    let maxLength = 0
    let curSum = diff[0]

    while (j < s.length) {
        if (curSum > maxCost) {
            curSum -= diff[i]
            i++
            if (i > j) {
                j++
                curSum += diff[j]
            }
        } else {
            maxLength = Math.max(maxLength, j - i + 1)
            j++
            curSum += diff[j]
        }
    }

    return maxLength
}
