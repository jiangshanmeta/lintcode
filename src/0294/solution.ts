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
   * @param head: the linked list to be simplify.
   * @return: return the linked list after simplifiction.
   */
    simplify (head: ListNode): ListNode {
        let count = 1;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
            count++;
        }

        head.next = tail;
        const str = String(count - 2);
        for (let i = str.length - 1; i > -1; i--) {
            const n = new ListNode(str.charCodeAt(i));
            n.next = head.next;
            head.next = n;
        }

        return head;
    }
}
