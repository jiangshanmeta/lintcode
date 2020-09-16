/**
 * @param l1: ListNode l1 is the head of the linked list
 * @param l2: ListNode l2 is the head of the linked list
 * @return: ListNode head of linked list
 */
const mergeTwoLists = function (l1, l2) {
    const dummyHead = new ListNode();
    let last = dummyHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            last.next = l1;
            l1 = l1.next;
        } else {
            last.next = l2;
            l2 = l2.next;
        }
        last = last.next;
    }

    if (l1) {
        last.next = l1;
    } else {
        last.next = l2;
    }

    return dummyHead.next;
};
