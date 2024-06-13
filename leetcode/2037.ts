// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b)
    students.sort((a, b) => a - b)
    let moveSteps = 0
    for (let i = 0; i < seats.length; i++) {
        moveSteps += Math.abs(seats[i] - students[i])
    }
    return moveSteps
}
