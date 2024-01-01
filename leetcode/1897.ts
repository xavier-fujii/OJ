// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/

function makeEqual(words: string[]): boolean {
    const wordsChars = words.map((w) => w.split(""))
    const charsFrequenciesMap = new Map<string, number>()
    for (const w of wordsChars) {
        for (const c of w) {
            const v = charsFrequenciesMap.get(c) ?? 0
            charsFrequenciesMap.set(c, v + 1)
        }
    }
    for (const f of charsFrequenciesMap.values()) {
        if (f % words.length !== 0) {
            return false
        }
    }
    return true
}

console.log(makeEqual(["abca", "bc"]))
console.log(makeEqual(["abc", "aabc", "c"]))
