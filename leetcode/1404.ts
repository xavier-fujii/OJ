// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one

function numSteps(s: string): number {
    let arr = s.split("")
    let steps = 0
    while (arr.length > 1) {
        if (arr[arr.length - 1] === "0") {
            arr.pop()
        } else {
            arr = plusOne(arr)
        }
        steps++
    }
    return steps
}

function plusOne(arr: string[]): string[] {
    if (arr.length === 0) return ["1"]
    let len = arr.length
    if (arr[len - 1] === "0") return arr.slice(0, len - 1).concat("1")
    else return plusOne(arr.slice(0, len - 1)).concat("0")
}
