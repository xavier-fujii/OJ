// https://leetcode.com/problems/path-with-maximum-gold

const directions = [0, 1, 0, -1, 0]

function dfsBacktrack(grid: number[][], rows: number, cols: number, row: number, col: number) {
    // base case
    if (row < 0 || col < 0 || row === rows || col === cols || grid[row][col] === 0) {
        return 0
    }

    let maxGold = 0

    let originalValue = grid[row][col]
    grid[row][col] = 0

    for (let dir = 0; dir < 4; dir++) {
        maxGold = Math.max(
            maxGold,
            dfsBacktrack(grid, rows, cols, directions[dir] + row, directions[dir + 1] + col)
        )
    }

    grid[row][col] = originalValue
    return maxGold + originalValue
}

function getMaximumGold(grid: number[][]): number {
    let rows = grid.length
    let cols = grid[0].length
    let maxGold = 0

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            maxGold = Math.max(maxGold, dfsBacktrack(grid, rows, cols, row, col))
        }
    }

    return maxGold
}
