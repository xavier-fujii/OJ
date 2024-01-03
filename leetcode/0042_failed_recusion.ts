// https://leetcode.com/problems/trapping-rain-water
function trap(height: number[]): number {
    if (height.length === 1 || height.length === 0) {
        return 0
    }
    const idx = getHighestIdx(height)
    return trapHelper(height.slice(0, idx + 1).reverse()) + trapHelper(height.slice(idx))
}

// left is highest
function trapHelper(height: number[]) {
    if (height.length === 1 || height.length === 0) {
        return 0
    }
    const idx = getHighestIdx(height.slice(1)) + 1
    return trapHelper2(height.slice(0, idx + 1)) + trapHelper(height.slice(idx))
}

// left and right make height a trap
function trapHelper2(height: number[]) {
    if (height.length === 1 || height.length === 0) {
        return 0
    }
    const max = Math.min(height[0], height[height.length - 1])
    let sum = 0
    for (const h of height) {
        sum += Math.max(0, max - h)
    }
    return sum
}

function getHighestIdx(height: number[]): number {
    let max = -1
    let index = -1
    height.forEach((h, idx) => {
        if (h > max) {
            index = idx
            max = h
        }
    })
    return index
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
