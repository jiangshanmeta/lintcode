/**
 * @param l1: the first list
 * @param l2: the second list
 * @return: the product list of l1 and l2
 */
const multiplyLists = function (l1, l2) {
    let num1 = 0;
    let num2 = 0;
    while(l1){
        num1 = num1*10+l1.val;
        l1 = l1.next;
    }
    while(l2){
        num2 = num2*10+l2.val;
        l2 = l2.next;
    }
    return num1*num2;
    
    const dummyHead = new ListNode(0);
    while(multi){
        const digit = multi%10;
        multi = (multi-digit)/10;
        const newNode = new ListNode(digit);
        newNode.next = dummyHead.next;
        dummyHead.next = newNode;
    }

    return dummyHead.next;
}

