/**
 * @param head: The first node of linked list.
 * @param n: An integer
 * @return: The head of linked list.
 */
const removeNthFromEnd = function (head, n) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    last = dummyHead;
    while (n--) {
        head = head.next;
    }
    while (head) {
        head = head.next;
        last = last.next;
    }
    last.next = last.next.next;

    return dummyHead.next;
};
