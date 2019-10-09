/**
 * @param head: ListNode head is the head of the linked list 
 * @param m: An integer
 * @param n: An integer
 * @return: The head of the reversed ListNode
 */
const reverseBetween = function (head, m, n) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let prev = dummyHead;
    n -= m;
    while(--m){
        prev = head;
        head = head.next;
    }
    
    while(n--){
        head = head.next;
    }

    const tail = head.next;
    head.next = null;
    head = prev.next;
    prev.next = tail;

    while(head){
        const next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }

    return dummyHead.next;
}

