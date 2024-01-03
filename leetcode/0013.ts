// https://leetcode.com/problems/roman-to-integer
function romanToInt(s: string): number {
    const sReplaced = s
        .replaceAll("IV", "IIII")
        .replaceAll("IX", "VIIII")
        .replaceAll("XL", "XXXX")
        .replaceAll("XC", "LXXXX")
        .replaceAll("CD", "CCCC")
        .replaceAll("CM", "DCCCC")

    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let sum = 0
    for (const sym of sReplaced.split("")) {
        sum += values[sym]
    }
    return sum
}
