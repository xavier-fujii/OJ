// https://leetcode.com/problems/hand-of-straights/

function isNStraightHand(hand: number[], groupSize: number): boolean {
    let dict: { card: number; count: number }[] = []
    hand.sort((a, b) => a - b)
    for (const c of hand) {
        if (dict[dict.length - 1]?.card === c) {
            dict[dict.length - 1].count += 1
        } else {
            dict.push({ card: c, count: 1 })
        }
    }
    return canBeRearranged(dict, groupSize)
}

function canBeRearranged(dict: { card: number; count: number }[], groupSize: number) {
    if (dict.length === 0) return true
    for (let i = 0; i < groupSize; i++) {
        if (dict[i]?.card !== dict[0].card + i || dict[i].count === 0) return false
        dict[i].count--
    }
    // remove card which count is zero
    while (dict[0] !== undefined && dict[0].count === 0) {
        dict.shift()
    }
    return canBeRearranged(dict, groupSize)
}
