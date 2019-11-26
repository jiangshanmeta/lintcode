/**
 * @param head: a ListNode
 * @param k: An integer
 * @return: a ListNode
 */
const reverseKGroup = function (head, k) {
    const dummyHead = new ListNode();
    let prev = dummyHead;
    const reverseDummyHead = new ListNode();
    while(head){
        const start = head;
        let last = head;
        head = head.next;
        let count = 1;
        while(head && count<k){
            last = head;
            head = head.next;
            count++;
        }
        if(count === k){
            last.next = null;
            prev.next = reverse(start,reverseDummyHead);
            while(prev.next){
                prev = prev.next;
            }
        }else{
            prev.next = start;
            break;
        }
    }
    return dummyHead.next;
}

function reverse(head,dummyHead){
    while(head){
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }
    head = dummyHead.next;
    dummyHead.next = null;
    return head;
}