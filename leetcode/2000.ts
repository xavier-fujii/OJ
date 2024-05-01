// https://leetcode.com/problems/reverse-prefix-of-word/

function reversePrefix(word: string, ch: string): string {
    const idx = word.indexOf(ch)
    if (idx === -1) return word
    return (
        word
            .substring(0, idx + 1)
            .split("")
            .reverse()
            .join("") + word.substring(idx + 1)
    )
}
