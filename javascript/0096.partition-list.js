/**
 * @param head: The first node of linked list
 * @param x: An integer
 * @return: A ListNode
 */
const partition = function (head, x) {
    const smallerDummy = new ListNode();
    const dummy = new ListNode();
    let smallerLast = smallerDummy;
    let last = dummy;
    while(head){
        if(head.val < x){
            smallerLast.next = head;
            smallerLast = smallerLast.next;
        }else{
            last.next = head;
            last = last.next;
        }
        head = head.next;
    }
    smallerLast.next = dummy.next;
    last.next = null;
    return smallerDummy.next;
}

