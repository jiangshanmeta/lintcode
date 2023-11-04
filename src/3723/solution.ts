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
   * @return: Linked list after deleting nodes
   */
    deleteDuplicatesUnsorted (head: ListNode | null): ListNode | null {
        let copy1 = head;
        const map = new Map<number, boolean>();
        while (copy1) {
            if (map.has(copy1.val)) {
                map.set(copy1.val, false);
            } else {
                map.set(copy1.val, true);
            }
            copy1 = copy1.next;
        }
        const dummyHead = new ListNode(0);
        dummyHead.next = head;
        let prev = dummyHead;
        while (head) {
            if (map.get(head.val)) {
                prev = head;
                head = head.next;
            } else {
                prev.next = head.next;
                head = head.next;
            }
        }

        return dummyHead.next;
    }
}
