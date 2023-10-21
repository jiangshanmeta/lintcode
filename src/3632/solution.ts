
export class ListNode {
    val :number;
    next :ListNode | null;
    constructor (x :number) {
        this.val = x;
        this.next = null;
    }
}

export class Solution {
    /**
   * @param head: Head of a linked list.
   * @param m: Nodes to be kept.
   * @param n: Nodes to be deleted.
   * @return: The head of the modified list after removing the mentioned nodes.
   */
    deleteNodes (head: ListNode | null, m: number, n: number): ListNode|null {
        if (!head) {
            return head;
        }
        let tail:ListNode | null = head;
        let count = 1;
        while (count < m && tail) {
            count++;
            tail = tail.next;
        }
        if (!tail) {
            return head;
        }
        let remove = tail.next;
        tail.next = null;
        count = 1;
        while (count < n && remove) {
            count++;
            remove = remove.next;
        }
        if (!remove) {
            return head;
        }
        tail.next = this.deleteNodes(remove.next, m, n);
        remove.next = null;
        return head;
    }
}
