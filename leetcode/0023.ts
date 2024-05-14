// https://leetcode.com/problems/merge-k-sorted-lists

function mergeTwoLists(listOne: ListNode | null, listTwo: ListNode | null): ListNode | null {
    if (listTwo === null) return listOne
    if (listOne === null) return listTwo
    if (listOne.val < listTwo.val) {
        listOne.next = mergeTwoLists(listOne.next, listTwo)
        return listOne
    } else {
        listTwo.next = mergeTwoLists(listOne, listTwo.next)
        return listTwo
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]
    let newLists: Array<ListNode | null> = []
    for (let i = 0; i < lists.length; i += 2) {
        let s = lists[i]
        let t = lists[i + 1] ?? null
        newLists.push(mergeTwoLists(s, t))
    }
    return mergeKLists(newLists)
}
