/**
 * @param arrays: k sorted integer arrays
 * @return: a sorted array
 */
const mergekSortedArrays = function (arrays) {
    if (arrays.length === 0) {
        return [];
    }
    return mergeHelper(arrays, 0, arrays.length - 1);
};

function mergeHelper (arrays, start, end) {
    if (start === end) {
        return arrays[start];
    } else if (start + 1 === end) {
        return merge2(arrays[start], arrays[end]);
    } else {
        const mid = (start + end) >> 1;
        return merge2(
            mergeHelper(arrays, start, mid),
            mergeHelper(arrays, mid + 1, end)
        );
    }
}

function merge2 (arr1, arr2) {
    const result = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            result.push(arr1[index1++]);
        } else {
            result.push(arr2[index2++]);
        }
    }
    while (index1 < arr1.length) {
        result.push(arr1[index1++]);
    }
    while (index2 < arr2.length) {
        result.push(arr2[index2++]);
    }
    return result;
}
