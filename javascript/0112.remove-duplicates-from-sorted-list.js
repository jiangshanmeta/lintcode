/**
 * @param head: head is the head of the linked list
 * @return: head of linked list
 */
const deleteDuplicates = function (head) {
    const dummyHead = {};
    dummyHead.next = head;
    let prev = dummyHead;
    while (head) {
        if (head.val === prev.val) {
            prev.next = head.next;
        } else {
            prev = head;
        }
        head = head.next;
    }

    return dummyHead.next;
};
