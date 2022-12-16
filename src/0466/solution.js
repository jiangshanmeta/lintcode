/**
 * @param head: the first node of linked list.
 * @return: An integer
 */
const countNodes = function (head) {
    let count = 0;
    while (head) {
        count++;
        head = head.next;
    }
    return count;
};
