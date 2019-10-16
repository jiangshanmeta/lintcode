/**
 * @param head: the List
 * @param k: rotate to the right k places
 * @return: the list after rotation
 */
const rotateRight = function (head, k) {
    if(!head || k === 0){
        return head;
    }
    let count = 0;
    let node = head;
    let prev;
    while(node){
        count++;
        prev = node;
        node = node.next;
    }
    k %= count;
    if(k === 0){
        return head;
    }
    let last;
    let rest = count-k;
    node = head;
    while(rest--){
        last = node;
        node = node.next;
    }
    const newHead = last.next;
    last.next = null;
    prev.next = head;
    return newHead;
}

