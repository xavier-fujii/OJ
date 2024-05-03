// https://leetcode.com/problems/compare-version-numbers

function compareVersion(version1: string, version2: string): number {
    let v1Arr = version1.split(".").map((s) => parseInt(s, 10))
    let v2Arr = version2.split(".").map((s) => parseInt(s, 10))
    let length = Math.max(v1Arr.length, v2Arr.length)
    let result = 0

    for (let i = 0; i < length; i++) {
        let v1VersionAtI = v1Arr[i] ?? 0
        let v2VersionAtI = v2Arr[i] ?? 0
        if (v1VersionAtI < v2VersionAtI) return -1
        if (v1VersionAtI > v2VersionAtI) return 1
    }

    return result
}
