// https://leetcode.com/problems/height-checker

function heightChecker(heights: number[]): number {
    let expected = [...heights].sort((a, b) => a - b)
    let result = 0
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) result++
    }
    return result
}
