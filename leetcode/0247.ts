// https://leetcode.com/problems/h-index/
function hIndex(citations: number[]): number {
    const data = citations
        .sort((a, b) => a - b)
        .map((c, idx) => ({
            citationNumber: c,
            atLeast: citations.length - idx,
        }))
        // make adjacent items with same citationNumber become one
        .reduce<{ citationNumber: number; atLeast: number }[]>((acc, cur) => {
            if (acc.length === 0 || acc[acc.length - 1].citationNumber !== cur.citationNumber) {
                return acc.concat(cur)
            } else {
                return acc
            }
        }, [])
        .sort((a, b) => {
            if (a.atLeast < b.atLeast) return -1
            if (a.atLeast === b.atLeast) return a.citationNumber - b.citationNumber
            return 1
        })

    let idx = 0
    for (const d of data) {
        if (idx <= d.citationNumber && idx <= d.atLeast) {
            idx = Math.min(d.citationNumber, d.atLeast)
        }
    }
    return idx
}
