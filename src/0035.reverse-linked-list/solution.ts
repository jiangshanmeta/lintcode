class ListNode {
    val :number;
    next :ListNode;
    constructor(x :number) {
        this.val = x;
        this.next = null;
    }
}


export class Solution {
    /**
     * @param head: n
     * @return: The new head of reversed linked list.
     */
    reverse(head: ListNode): ListNode {
      const dummyHead = new ListNode(0);
      while(head){
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next
      }
      return dummyHead.next
    }
  }