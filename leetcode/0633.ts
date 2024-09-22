// https://leetcode.com/problems/sum-of-square-numbers/

function judgeSquareSum(c: number): boolean {
    let squares: Set<number> = new Set()
    for (let i = 0; i <= Math.sqrt(Math.pow(2, 31)); i++) {
        squares.add(i * i)
    }

    for (const n of squares.values()) {
        if (c >= n) {
            if (squares.has(c - n)) return true
        }
    }

    return false
}
