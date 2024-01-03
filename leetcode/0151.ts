// https://leetcode.com/problems/reverse-words-in-a-string

function reverseWords(s: string): string {
    const re = removeDoubleBlank(s.trim())
    return re.split(" ").reverse().join(" ")
}

function removeDoubleBlank(s: string): string {
    if (s.includes("  ")) {
        return removeDoubleBlank(s.replaceAll("  ", " "))
    }
    return s
}
