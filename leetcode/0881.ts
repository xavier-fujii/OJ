// https://leetcode.com/problems/boats-to-save-people

function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => {
        if (a > b) return -1
        if (a < b) return 1
        return 0
    })
    let boats_count: number = 0
    let i = 0
    let j = people.length - 1

    while (i <= j) {
        let peopleOneWeight = people[i]
        let restLimit = limit - peopleOneWeight
        if (people[j] <= restLimit && i !== j) {
            j--
        }
        i++
        boats_count++
    }

    return boats_count
}
