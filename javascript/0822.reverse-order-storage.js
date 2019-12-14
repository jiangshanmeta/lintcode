/**
 * @param head: the given linked list
 * @return: the array that store the values in reverse order 
 */
const reverseStore = function (head) {
    const result = [];
    while(head){
        result.push(head.val);
        head = head.next;
    }
    result.reverse();
    return result;
}

