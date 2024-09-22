const lowerLimit = 30
const upperLimit = 100

function dailyTemperatures(temperatures: number[]): number[] {
    const answers = temperatures.map((i) => 0)
    const dict: Record<number, number> = {}
    for (let i = lowerLimit; i <= upperLimit; i++) {
        dict[i] = -1
    }
    for (let index = temperatures.length - 1; index >= 0; index--) {
        const tem = temperatures[index]

        let result = 0
        for (let i = tem + 1; i <= upperLimit; i++) {
            const location = dict[i]
            if (location !== -1) {
                const diff = Math.abs(location - index)
                if (result === 0) {
                    result = diff
                } else {
                    result = Math.min(diff, result)
                }
            }
        }

        answers[index] = result
        dict[tem] = index
    }

    return answers
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
