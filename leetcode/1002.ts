function commonChars(words: string[]): string[] {
    let result = words[0].split("")
    for (const word of words) {
        result = getA(result, word.split(""))
    }
    return result
}

function getA(a1: string[], a2: string[]) {
    let a1Dic: Record<string, number> = {}
    let a2Dic: Record<string, number> = {}
    for (const c of a1) {
        if (a1Dic[c] !== undefined) {
            a1Dic[c] = a1Dic[c] + 1
        } else {
            a1Dic[c] = 1
        }
    }
    for (const c of a2) {
        if (a2Dic[c] !== undefined) {
            a2Dic[c] = a2Dic[c] + 1
        } else {
            a2Dic[c] = 1
        }
    }
    let result: string[] = []
    for (const [key, value] of Object.entries(a1Dic)) {
        let count: number = Math.min(value, a2Dic[key] ?? 0)
        while (count > 0) {
            result.push(key)
            count--
        }
    }
    return result
}
