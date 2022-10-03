/**
 * @param head: the head node
 * @return: the middle node
 */
const middleNode = function (head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let fast = dummyHead;
    let slow = dummyHead;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.next;
};
