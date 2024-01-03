// https://leetcode.com/problems/trapping-rain-water
function trap(height: number[]): number {
    const fromLeftHighest = new Array(height.length).fill(0)
    let h = 0

    for (let i = 0; i < height.length; i++) {
        const newH = Math.max(height[i], h)
        fromLeftHighest[i] = newH
        h = newH
    }

    let h2 = 0
    const formRightHighest = new Array(height.length).fill(0)
    for (let i = height.length - 1; i >= 0; i--) {
        const newH = Math.max(height[i], h2)
        formRightHighest[i] = newH
        h2 = newH
    }

    let sum = 0
    for (let i = 0; i < height.length; i++) {
        const hFinal = Math.min(fromLeftHighest[i], formRightHighest[i])
        const water = Math.max(0, hFinal - height[i])
        sum += water
    }

    return sum
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))
