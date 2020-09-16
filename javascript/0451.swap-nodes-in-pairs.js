/**
 * @param head: a ListNode
 * @return: a ListNode
 */
const swapPairs = function (head) {
    const dummyHead = new ListNode(0);
    let prev = dummyHead;
    while (head) {
        const next = head.next;
        head.next = prev.next;
        prev.next = head;
        if (next) {
            head = next.next;
            next.next = prev.next;
            prev.next = next;
            prev = prev.next.next;
        } else {
            break;
        }
    }
    return dummyHead.next;
};
