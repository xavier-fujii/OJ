const modulo = Math.pow(10, 9) + 7

function checkRecord(n: number): number {
    let results: [number, number, number, number, number, number] = [1, 1, 1, 0, 0, 0]
    // ends without L, contains no A
    function c0(): number {
        let r =
            // append P
            results[0] +
            // append P
            results[2] +
            // append P
            results[4]

        return r % modulo
    }

    // ends without L, contains an A
    function c1(): number {
        let r = results[0] + results[1] + results[2] + results[3] + results[4] + results[5]
        return r % modulo
    }

    // ends with single L, contains no A
    function c2(): number {
        return results[0]
    }

    // ends with single L, contains an A
    function c3(): number {
        return results[1]
    }

    // ends with double L, contains no A
    function c4(): number {
        return results[2]
    }

    // ends with double L, contains an A
    function c5(): number {
        return results[3]
    }

    for (let i = 1; i <= n - 1; i++) {
        const newResults = [c0(), c1(), c2(), c3(), c4(), c5()] as const
        results = [...newResults]
    }

    return c1()
}
