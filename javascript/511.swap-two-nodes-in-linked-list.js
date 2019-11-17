/**
 * @param head: a ListNode
 * @param v1: An integer
 * @param v2: An integer
 * @return: a new head of singly-linked list
 */
const swapNodes = function (head, v1, v2) {
    let node1 = head;
    let node2 = head;
    while(node1 && node1.val !== v1){
        node1 = node1.next;
    }
    if(!node1){
        return head;
    }
    while(node2 && node2.val !== v2){
        node2 = node2.next;
    }
    if(!node2){
        return head;
    }
    const tmp = node1.val;
    node1.val = node2.val;
    node2.val = tmp;
    return head;
}

