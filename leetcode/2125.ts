function numberOfBeams(bank: string[]): number {
    const devices = bank.map((b) => b.replaceAll("0", "")).map((k) => k.length)

    const devicesRemoveEmpty = devices.filter((k) => k > 0)

    let previousSecurityCount = 0
    let sum = 0
    for (const securityCount of devicesRemoveEmpty) {
        sum += securityCount * previousSecurityCount
        previousSecurityCount = securityCount
    }

    return sum
}

numberOfBeams(["011001", "000000", "010100", "001000"])
