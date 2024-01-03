// https://leetcode.com/problems/integer-to-roman/
function intToRoman(num: number): string {
    let arr: string[] = []
    let rest = num
    const mCount = Math.floor(num / 1000)
    for (let i = 0; i < mCount; i++) arr.push("M")
    rest = num % 1000

    const hundred = Math.floor(rest / 100)
    rest = rest % 100
    if (hundred === 4) {
        arr.push("CD")
    } else if (hundred === 9) {
        arr.push("CM")
    } else if (hundred >= 1 && hundred <= 3) {
        for (let i = 1; i <= hundred; i++) {
            arr.push("C")
        }
    } else if (hundred >= 5 && hundred <= 8) {
        arr.push("D")
        for (let i = 6; i <= hundred; i++) {
            arr.push("C")
        }
    }

    const ten = Math.floor(rest / 10)
    rest = rest % 10
    if (ten === 4) {
        arr.push("XL")
    } else if (ten === 9) {
        arr.push("XC")
    } else if (ten >= 1 && ten <= 3) {
        for (let i = 1; i <= ten; i++) {
            arr.push("X")
        }
    } else if (ten >= 5 && ten <= 8) {
        arr.push("L")
        for (let i = 6; i <= ten; i++) {
            arr.push("X")
        }
    }

    if (rest === 4) {
        arr.push("IV")
    } else if (rest === 9) {
        arr.push("IX")
    } else if (rest >= 1 && rest <= 3) {
        for (let i = 1; i <= rest; i++) {
            arr.push("I")
        }
    } else if (rest >= 5 && rest <= 8) {
        arr.push("V")
        for (let i = 6; i <= rest; i++) {
            arr.push("I")
        }
    }
    return arr.join("")
}

intToRoman(1994)
