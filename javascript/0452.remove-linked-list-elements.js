/**
 * @param head: a ListNode
 * @param val: An integer
 * @return: a ListNode
 */
const removeElements = function (head, val) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    let prev = dummyHead;
    while(head){
        if(head.val === val){
            prev.next = head.next;
        }else{
            prev = head;
        }
        head = head.next;
    }

    return dummyHead.next;
}

