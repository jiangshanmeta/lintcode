/**
 * @param head: the first Node
 * @return: the answer after plus one
 */
const plusOne = function (head) {
    head = reverse(head);
    let carry = 1;
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let prev = dummyHead;
    while (carry && head) {
        const sum = carry + head.val;
        const digit = sum % 10;
        carry = (sum - digit) / 10;
        head.val = digit;
        prev = head;
        head = head.next;
    }
    if (carry) {
        prev.next = new ListNode(carry);
    }
    return reverse(dummyHead.next);
};

function reverse (head) {
    const dummyHead = new ListNode(0);
    while (head) {
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }

    return dummyHead.next;
}
