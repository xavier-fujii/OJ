// https://leetcode.com/problems/gas-station

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const gasReal = gas.map((c, idx) => {
        return c - cost[idx]
    })

    let curSum2 = 0
    let maxSumFromRight = { num: Number.NEGATIVE_INFINITY, idx: -1 }
    for (let i = gas.length - 1; i >= 0; i--) {
        curSum2 = curSum2 + gasReal[i]
        if (curSum2 > maxSumFromRight.num) {
            maxSumFromRight = { num: curSum2, idx: i }
        }
    }

    return canRun(gasReal, maxSumFromRight.idx)
}

function canRun(gasReal: number[], startPosition: number) {
    let s = 0
    for (let i = 0; i < gasReal.length; i++) {
        const idx = (startPosition + i) % gasReal.length
        s += gasReal[idx]
        if (s < 0) {
            return -1
        }
    }
    return startPosition
}
