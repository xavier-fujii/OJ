// https://leetcode.com/problems/delete-node-in-a-linked-list

/**
 * Definition for singly-linked list.

 *
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
    let nextNode = node?.next
    if (nextNode && node) {
        node.val = nextNode.val
        node.next = nextNode.next
    }
}
