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
   * @param head: The first node of linked list
   * @param x: An integer
   * @return: A ListNode
   */
    partition (head: ListNode | null, x: number): ListNode | null{
        const lHead = new ListNode(0);
        let lTail = lHead;
        const gtHead = new ListNode(0);
        let gtTail = gtHead;
        while (head) {
            const next = head.next;
            head.next = null;
            if (head.val < x) {
                lTail.next = head;
                lTail = lTail.next;
            } else {
                gtTail.next = head;
                gtTail = gtTail.next;
            }
            head = next;
        }
        lTail.next = gtHead.next;
        return lHead.next;
    }
}
