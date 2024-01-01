function maxLengthBetweenEqualCharacters(s: string): number {
    // records each character and its leftmost index
    let r = new Map<string, number>()
    let maxOffset = 0

    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        const findCurIndex = r.get(cur)

        if (findCurIndex !== undefined) {
            const offset = i - findCurIndex
            if (offset > maxOffset) {
                maxOffset = offset
            }
        } else {
            r.set(cur, i)
        }
    }

    return maxOffset - 1
}
