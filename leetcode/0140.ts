// https://leetcode.com/problems/word-break-ii

function wordBreak(s: string, wordDict: string[]): string[] {
    const wordD = new Set(wordDict)

    let result: string[][] = []
    let path: string[] = []

    const helper = (i: number, j: number) => {
        if (i === s.length) {
            result.push([...path])
            return
        }

        for (let index = j; index <= s.length; ++index) {
            if (wordD.has(s.slice(i, index))) {
                path.push(s.slice(i, index))
                helper(index, index + 1)
                path.pop()
            }
        }
    }

    helper(0, 1)

    return result.map((a) => a.join(" "))
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]))
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]))
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
