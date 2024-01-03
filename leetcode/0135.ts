// https://leetcode.com/problems/candy/
function candy(ratings: number[]): number {
    const results = new Array(ratings.length).fill(1)
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            results[i] = results[i - 1] + 1
        }
    }

    for (let i = ratings.length - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            results[i - 1] = Math.max(results[i] + 1, results[i - 1])
        }
    }

    return results.reduce((acc, cur) => acc + cur, 0)
}
