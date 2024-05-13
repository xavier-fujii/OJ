// https://leetcode.com/problems/score-after-flipping-matrix
function reverseRow(row: number[]) {
    for (let i = 0; i < row.length; i++) {
        row[i] = 1 - row[i]
    }
}

function matrixScore(grid: number[][]): number {
    let m = grid.length
    let n = grid[0].length
    let max = 0

    // reverse row
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            reverseRow(grid[i])
        }
        max += Math.pow(2, n - 1)
    }
    // reverse column
    for (let colIdx = 1; colIdx < n; colIdx++) {
        let zeroNumber = 0
        let oneNumber = 0
        for (let rowIdx = 0; rowIdx < m; rowIdx++) {
            if (grid[rowIdx][colIdx] === 0) zeroNumber += 1
            else oneNumber += 1
        }
        max += Math.max(zeroNumber, oneNumber) * Math.pow(2, n - colIdx - 1)
    }

    return max
}
