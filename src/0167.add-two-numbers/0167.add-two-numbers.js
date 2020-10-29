/**
 * @param l1: the first list
 * @param l2: the second list
 * @return: the sum list of l1 and l2
 */
const addLists = function (l1, l2) {
    const dummyHead = l1;
    let last = dummyHead;
    let carry = 0;
    while (l1 && l2) {
        const sum = l1.val + l2.val + carry;
        const digit = sum % 10;
        carry = (sum - digit) / 10;
        l1.val = digit;
        last = l1;
        l1 = l1.next;
        l2 = l2.next;
    }

    if (l2) {
        last.next = l2;
        l1 = l2;
    }

    while (l1 && carry) {
        const sum = l1.val + carry;
        const digit = sum % 10;
        l1.val = digit;
        carry = (sum - digit) / 10;
        last = l1;
        l1 = l1.next;
    }

    if (carry) {
        last.next = new ListNode(carry);
    }

    return dummyHead;
};
