// https://leetcode.com/problems/insert-delete-getrandom-o1

class RandomizedSet {
    obj: Map<number, number>
    arr: number[]

    constructor() {
        this.obj = new Map()
        this.arr = []
    }

    insert(val: number): boolean {
        const notPresent = !this.obj.has(val)
        if (!this.obj.has(val)) {
            this.arr.push(val)
            this.obj.set(val, this.arr.length - 1)
        }
        return notPresent
    }

    remove(val: number): boolean {
        const idxToRemove = this.obj.get(val)
        if (idxToRemove === undefined) {
            return false
        } else {
            if (idxToRemove !== this.arr.length - 1) {
                this.obj.set(this.arr[this.arr.length - 1], idxToRemove)
                this.arr[idxToRemove] = this.arr[this.arr.length - 1]
            }
            this.arr.pop()
            this.obj.delete(val)
            return true
        }
    }

    getRandom(): number {
        return this.arr[Math.floor(Math.random() * this.arr.length)]
    }
}
