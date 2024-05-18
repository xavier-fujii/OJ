function getKNode(head: ListNode | null, k: number): ListNode | null {
    let result = head
    let i = k
    while (i > 0) {
        if (result?.next) result = result.next
        else result = null
        i--
    }
    return result
}

function reverse(head: ListNode): [ListNode, ListNode] {
    if (head.next === null) return [head, head]
    const [h, t] = reverse(head.next)
    t.next = head
    return [h, head]
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return null
    const kPrevNode: ListNode | null = getKNode(head, k - 1)
    const kNode = kPrevNode?.next ?? null
    if (kPrevNode === null) return head
    else {
        kPrevNode.next = null
        const [h, t] = reverse(head)
        t.next = reverseKGroup(kNode, k)
        return h
    }
}
