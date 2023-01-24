/*

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

*/

var reorderList = function(head) {
    // find middle
	// by moving "fast" twice, we'll have "slow" in the middle
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse second half
	// with reverse linked list solution
    let prev = null
    let cur = slow.next
    while (cur) {
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }

    slow.next = null

    // combine two halves
    let h1 = head
    let h2 = prev

    // if even, second half will be smaller
	while (h2) {
        let temp = h1.next
        h1.next = h2
        h1 = h2
        h2 = temp
    }
};

/////////////////////
