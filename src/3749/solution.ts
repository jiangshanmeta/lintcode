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
   * @param head: A linked list sorted by the absolute value of the node values
   * @return: Returns a linked list sorted by node value
   */
    sortLinkedList (head: ListNode | null): ListNode | null {
        if (!head) {
            return head;
        }
        const negativeHead = new ListNode(0);
        let negativeTail:ListNode | null = null;
        const nonNegativeHead = new ListNode(0);
        let nonNegativeTail = nonNegativeHead;
        while (head) {
            if (head.val < 0) {
                if (negativeTail === null) {
                    negativeTail = head;
                }
                const next:ListNode | null = head.next;
                head.next = null;
                head.next = negativeHead.next;
                negativeHead.next = head;
                head = next;
            } else {
                const next = head.next;
                head.next = null;
                nonNegativeTail.next = head;
                nonNegativeTail = head;
                head = next;
            }
        }

        if (!negativeTail) {
            return nonNegativeHead.next;
        }
        negativeTail.next = nonNegativeHead.next;
        return negativeHead.next;
    }
}
