class ListNode {
    val :number;
    next :ListNode | null;
    constructor (x :number) {
        this.val = x;
        this.next = null;
    }
}

export class Solution {
    /**
   * @param node1: The first ListNode
   * @param node2: The second ListNode
   * @return: A new linked list representing the sum of corresponding numbers in the two given linked lists.
   */
    sumOfNumbers (node1: ListNode | null, node2: ListNode | null): ListNode | null {
        const head = new ListNode(0);
        let tail = head;
        let addon = 0;
        while (node1 && node2) {
            const sum = node1.val + node2.val + addon;
            const digit = sum % 10;
            addon = (sum - digit) / 10;
            tail.next = new ListNode(digit);
            tail = tail.next;
            node1 = node1.next;
            node2 = node2.next;
        }

        while (node1) {
            const sum = node1.val + addon;
            const digit = sum % 10;
            addon = (sum - digit) / 10;
            tail.next = new ListNode(digit);
            tail = tail.next;
            node1 = node1.next;
        }
        while (node2) {
            const sum = node2.val + addon;
            const digit = sum % 10;
            addon = (sum - digit) / 10;
            tail.next = new ListNode(digit);
            tail = tail.next;
            node2 = node2.next;
        }

        if (addon) {
            tail.next = new ListNode(addon);
        }

        return head.next;
    }
}
