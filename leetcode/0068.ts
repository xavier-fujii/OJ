// https://leetcode.com/problems/text-justification
function fullJustify(words: string[], maxWidth: number): string[] {
    const wordsNew = words.map((w) => w + " ")
    const maxWidthNew = maxWidth + 1

    const r2: string[] = []
    let s = ""
    for (const w of wordsNew) {
        if (s.length + w.length <= maxWidthNew) {
            s = s + w
        } else {
            r2.push(s)
            s = w
        }
    }
    if (s.length > 0) {
        r2.push(s)
    }

    return r2.map((r, idx) => {
        if (idx === r2.length - 1) {
            return r.trim().padEnd(maxWidth, " ")
        } else {
            return reArrange(r.trim(), maxWidth)
        }
    })
}

function reArrange(str: string, maxWidth: number) {
    const words = str.split(" ")
    if (words.length === 1) {
        return str.padEnd(maxWidth, " ")
    } else {
        const whitespaceTotal = maxWidth - str.replaceAll(" ", "").length
        const gapNumber = Math.floor(whitespaceTotal / (words.length - 1))
        const whitespaceUnassigned = whitespaceTotal - gapNumber * (words.length - 1)
        let s = ""
        let j = whitespaceUnassigned
        for (let i = 0; i < words.length; i++) {
            s += words[i]
            s += " ".repeat(gapNumber)
            if (j > 0) {
                s += " "
                j--
            }
        }
        s = s.trim()

        return s
    }
}

// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
console.log(
    fullJustify(
        [
            "Science",
            "is",
            "what",
            "we",
            "understand",
            "well",
            "enough",
            "to",
            "explain",
            "to",
            "a",
            "computer.",
            "Art",
            "is",
            "everything",
            "else",
            "we",
            "do",
        ],
        20
    )
)
