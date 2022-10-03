/**
 * @param l1: the first list
 * @param l2: the second list
 * @return: the product list of l1 and l2
 */
const multiplyLists = function (l1, l2) {
    let num1 = 0;
    let num2 = 0;
    while (l1) {
        num1 = num1 * 10 + l1.val;
        l1 = l1.next;
    }
    while (l2) {
        num2 = num2 * 10 + l2.val;
        l2 = l2.next;
    }
    return num1 * num2;
};
