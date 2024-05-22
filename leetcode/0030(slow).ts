function matchStringSlow(s: string, wordsMap: Map<string, number>, wordLength: number): boolean {
    if (wordsMap.size === 0) return true
    const targetWord = s.substring(0, wordLength)
    if (wordsMap.has(targetWord)) {
        const count = wordsMap.get(targetWord)
        if (count !== undefined && count > 1) {
            wordsMap.set(targetWord, count - 1)
        } else {
            wordsMap.delete(targetWord)
        }

        return matchStringSlow(s.slice(wordLength), wordsMap, wordLength)
    } else {
        return false
    }
}

function findSubstringSlow(s: string, words: string[]): number[] {
    const wordsMap = new Map<string, number>()
    for (const word of words) {
        const c = wordsMap.get(word)
        if (c === undefined) {
            wordsMap.set(word, 1)
        } else {
            wordsMap.set(word, c + 1)
        }
    }

    let result: number[] = []

    const len = words[0].length * words.length

    let memoized = new Map<string, boolean>()

    for (let i = 0; i < s.length; i++) {
        const str = s.slice(i, i + len)
        let memoizedResult = memoized.get(str)
        switch (memoizedResult) {
            case undefined:
                {
                    const wM = new Map(wordsMap)
                    if (matchStringSlow(str, wM, words[0].length)) {
                        result.push(i)
                        memoized.set(str, true)
                    } else {
                        memoized.set(str, false)
                    }
                }

                break

            case true:
                result.push(i)

            default:
                break
        }
    }

    return result
}
