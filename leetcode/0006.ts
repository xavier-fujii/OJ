// https://leetcode.com/problems/zigzag-conversion/

function convert(s: string, numRows: number): string {
    if (s.length === 1 || numRows === 1) return s
    const loopCount = numRows * 2 - 2
    const columnCount = Math.ceil(s.length / loopCount) * (numRows - 1)

    const map: string[][] = []

    s.split("").forEach((c, idx) => {
        const zigzagIdx = Math.floor(idx / loopCount)
        const zigzagInnerPosition = idx % loopCount

        const rowIdx =
            zigzagInnerPosition < numRows ? zigzagInnerPosition : loopCount - zigzagInnerPosition
        const columnIdx =
            (zigzagInnerPosition < numRows ? 0 : zigzagInnerPosition - numRows + 1) +
            zigzagIdx * (numRows - 1)
        if (!map[rowIdx]) {
            map[rowIdx] = []
        }
        map[rowIdx][columnIdx] = c
    })

    let result = ""
    for (const row of map) {
        for (const c of row) {
            if (c) {
                result += c
            }
        }
    }

    return result
}
convert("A", 1)
convert("PAYPALISHIRING", 3)
convert("PAYPALISHIRING", 4)
convert("PAYPALISHIRING", 5)
