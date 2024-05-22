function isPalindrome(s: string, i: number, j: number) {
    while (i < j - 1) {
        if (s[i] !== s[j - 1]) {
            return false
        }
        ++i
        --j
    }
    return true
}

function partition(s: string): string[][] {
    const res: string[][] = []
    const path: string[] = []
    const helper = (s: string, i: number, j: number) => {
        if (i === s.length) {
            res.push([...path])
            return
        }

        for (let index = j; index <= s.length; ++index) {
            if (isPalindrome(s, i, index)) {
                path.push(s.slice(i, index))
                helper(s, index, index + 1)
                path.pop()
            }
        }
    }

    helper(s, 0, 1)

    return res
}
