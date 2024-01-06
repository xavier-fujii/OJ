// https://leetcode.com/problems/container-with-most-water
function maxArea(height: number[]): number {
    let leftSlope: [number, number][] = []
    for (let i = 0; i < height.length; i++) {
        if (leftSlope.length === 0 || height[i] > leftSlope[leftSlope.length - 1][1]) {
            leftSlope.push([i, height[i]])
        }
    }
    let rightSlope: [number, number][] = []
    for (let i = height.length - 1; i >= 0; i--) {
        if (rightSlope.length === 0 || height[i] > rightSlope[rightSlope.length - 1][1]) {
            rightSlope.push([i, height[i]])
        }
    }

    let i = 0
    let j = 0
    let maxWaterVolume = 0
    while (i < leftSlope.length && j < rightSlope.length) {
        let leftHeight = leftSlope[i][1]
        let leftIdx = leftSlope[i][0]
        let rightHeight = rightSlope[j][1]
        let rightIdx = rightSlope[j][0]
        maxWaterVolume = Math.max(
            maxWaterVolume,
            (rightIdx - leftIdx) * Math.min(leftHeight, rightHeight)
        )

        if (i === leftSlope.length - 1) {
            j++
        } else if (j === rightSlope.length - 1) {
            i++
        } else {
            if (leftHeight < rightHeight) {
                i++
            } else if (leftHeight > rightHeight) {
                j++
            } else {
                let nextLeftIdx = leftSlope[i + 1][0]
                let nextRightIdx = rightSlope[j + 1][0]
                let leftDiff = Math.abs(nextLeftIdx - leftIdx)
                let rightDiff = Math.abs(nextRightIdx - rightIdx)
                if (leftDiff > rightDiff) {
                    j++
                } else {
                    i++
                }
            }
        }
    }
    return maxWaterVolume
}
