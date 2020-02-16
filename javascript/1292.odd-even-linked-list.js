/**
 * @param head: a singly linked list
 * @return: Modified linked list
 */
const oddEvenList = function (head) {
    if(!head || !head.next){
        return head;
    }

    const oddDummyHead = new ListNode(0);
    const evenDummyHead = new ListNode(0);
    let oddLast = oddDummyHead;
    let evenLast = evenDummyHead;
    let isOdd = true;

    while(head){
        let next = head.next;
        head.next = null;
        if(isOdd){
            oddLast.next = head;
            oddLast = head;
        }else{
            evenLast.next = head;
            evenLast = head;
        }
        isOdd = !isOdd;
        head = next;
    }
    oddLast.next = evenDummyHead.next;
    return oddDummyHead.next;
}

