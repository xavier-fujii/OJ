function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head?.next === null) {
        return head
    }
    const [len, last] = getLenAndLast(head)
    const offset = k % len
    if (offset === 0) return head

    const newLastIndex = len - offset

    let newLast = head
    for (let i = 1; i < newLastIndex; i++) {
        const next = newLast.next
        if (next) newLast = next
    }
    const newStart = newLast.next
    last.next = head
    newLast.next = null
    return newStart
}

function getLenAndLast(head: ListNode): [number, ListNode] {
    let current: ListNode | null = head
    let last: ListNode = head
    let length = 0
    while (current !== null) {
        length++
        current = current.next
        if (current) last = current
    }
    return [length, last]
}
