/**
 * @param head: A ListNode.
 * @return: A boolean.
 */
const isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }
    let slow = head;
    let fast = head;
    let prev;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    let l2 = reverse(prev.next);
    prev.next = null;
    while (head && l2) {
        if (head.val !== l2.val) {
            return false;
        }
        head = head.next;
        l2 = l2.next;
    }
    return true;
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
