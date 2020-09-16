/**
 * @param head: n
 * @return: The new head of reversed linked list.
 */
const reverse = function (head) {
    const dummyHead = new ListNode();
    while (head) {
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }
    return dummyHead.next;
};
