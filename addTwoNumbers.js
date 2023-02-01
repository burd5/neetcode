/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let resultNode = new ListNode(0);
    let returnNode = resultNode;

    while(l1 || l2){
        const sum = (l1 ? l1.val : null) + (l2 ? l2.val : null);
        resultNode.next = new ListNode(sum >= 10 ? sum % 10 : sum);
        carry = sum >= 10 ? Math.floor(sum/10) : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        resultNode = resultNode.next;
    }

    if(carry > 0){
        resultNode.next = new ListNode(carry)
    }

    return returnNode.next; 
}