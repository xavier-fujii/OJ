// https://leetcode.com/problems/replace-words/

function replaceWords(dictionary: string[], sentence: string): string {
    let words = sentence.split(" ")
    return words
        .map((word) => {
            let r: string | null = null
            for (const root of dictionary) {
                if (word.startsWith(root)) {
                    if (r === null) r = root
                    else if (root.length < r.length) r = root
                }
            }
            if (r) return r
            else return word
        })
        .join(" ")
}
