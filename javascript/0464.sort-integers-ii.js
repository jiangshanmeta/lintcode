/**
 * @param A: an integer array
 * @return:
 */
const sortIntegers2 = function (A) {
    if (A.length === 0) {
        return;
    }
    mergeSort(A, 0, A.length - 1);
};

function mergeSort (list, start, end) {
    if (start === end) {
        return;
    }
    const mid = (start + end) >> 1;
    mergeSort(list, start, mid);
    mergeSort(list, mid + 1, end);
    const tmp1 = [];
    for (let i = start; i < mid + 1; i++) {
        tmp1.push(list[i]);
    }
    const tmp2 = [];
    for (let i = mid + 1; i < end + 1; i++) {
        tmp2.push(list[i]);
    }

    let index1 = 0;
    let index2 = 0;
    while (index1 < tmp1.length && index2 < tmp2.length) {
        if (tmp1[index1] < tmp2[index2]) {
            list[start++] = tmp1[index1++];
        } else {
            list[start++] = tmp2[index2++];
        }
    }
    while (index1 < tmp1.length) {
        list[start++] = tmp1[index1++];
    }
    while (index2 < tmp2.length) {
        list[start++] = tmp2[index2++];
    }
}
