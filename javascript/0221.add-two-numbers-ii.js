/**
 * @param l1: The first list.
 * @param l2: The second list.
 * @return: the sum list of l1 and l2.
 */
const addLists2 = function (l1, l2) {
    if(!l1){
        return l2;
    }else if(!l2){
        return l1;
    }
    l1 = reverseList(l1);
    l2 = reverseList(l2);

    const dummyHead = l1;
    let last = dummyHead;
    let carry = 0;
    while(l1 && l2){
        const sum = l1.val+l2.val+carry;
        const digit = sum%10;
        carry = (sum-digit)/10;
        l1.val = digit;
        last = l1;
        l1 = l1.next;
        l2 = l2.next;
    }

    if(l2){
        last.next = l2;
        l1 = l2;
    }


    while (l1 && carry){
        const sum = l1.val+carry;
        const digit = sum%10;
        l1.val = digit;
        carry = (sum-digit)/10;
        last = l1;
        l1 = l1.next;
    }

    if(carry){
        last.next = new ListNode(carry);
    }

    return reverseList(dummyHead);
}

function reverseList(head){
    const dummyHead = new ListNode(0);
    
    while(head){
        const next = head.next;
        head.next = dummyHead.next;
        dummyHead.next = head;
        head = next;
    }

    return dummyHead.next;
}