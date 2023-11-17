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
   * @param head: ListNode head is the head of the linked list
   * @param m: An integer
   * @param n: An integer
   * @return: The head of the reversed ListNode
   */
    reverseBetween (head: ListNode, m: number, n: number): ListNode {
        const dummyHead = new ListNode(0);
        dummyHead.next = head;
        let prev = dummyHead;
        while (m > 1) {
            prev = prev.next!;
            m--;
            n--;
        }
        let last = prev;
        while (n > 0) {
            last = last.next!;
            n--;
        }
        const tail = last.next;
        last.next = null;
        let start = prev.next;
        prev.next = tail;
        while (start) {
            const n = start.next;
            start.next = prev.next;
            prev.next = start;
            start = n;
        }
        return dummyHead.next;
    }
}
