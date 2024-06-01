function scoreOfString(s: string): number {
    const codes = s.split("").map((i) => i.charCodeAt(0))

    let preCode: number | undefined = undefined
    let sum = 0

    for (const code of codes) {
        if (preCode === undefined) {
            preCode = code
        } else {
            sum += Math.abs(preCode - code)
            preCode = code
        }
    }

    return sum
}
