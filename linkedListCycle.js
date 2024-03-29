/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

// using Set

var hasCycle = function(head, seen = new Set()) {
    while (head) {/* Time O(N) */
        if (seen.has(head)) return true;

        seen.add(head);/* Space O(N) */
        head = head.next;
    }

    return false;
}

// using fast and slow pointers

const hasCycle = (head) => {
    let fast = head;
    while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next; 
      if (head === fast) return true;
    }
    return false;
  };