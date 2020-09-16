/**
 * @param words: an array of string
 * @param k: An integer
 * @return: an array of string
 */
const topKFrequentWords = function (words, k) {
    const uniqueWords = [];
    const countMap = {};
    for (let i = 0; i < words.length; i++) {
        if (countMap[words[i]]) {
            countMap[words[i]]++;
        } else {
            uniqueWords.push(words[i]);
            countMap[words[i]] = 1;
        }
    }

    // 最小堆
    const heap = [];
    for (let i = 0; i < uniqueWords.length; i++) {
        if (heap.length < k) {
            heap.push(uniqueWords[i]);
            sideUp(heap, heap.length - 1, countMap);
        } else if (compare(uniqueWords[i], heap[0], countMap)) {
            heap[0] = uniqueWords[i];
            sideDown(heap, 0, countMap);
        }
    }

    return heap.sort((a, b) => {
        if (countMap[a] !== countMap[b]) {
            return countMap[b] - countMap[a];
        }
        return a > b ? 1 : -1;
    });
};
// 返回a是否大于b true false
function compare (a, b, countMap) {
    if (countMap[a] !== countMap[b]) {
        return countMap[a] > countMap[b];
    }
    // 数量相等 字典序小 则大
    return a < b;
}

function swap (heap, i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideUp (heap, index, countMap) {
    while (index > 0) {
        const parent = (index - 1) >> 1;
        if (compare(heap[parent], heap[index], countMap)) {
            swap(heap, parent, index);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDown (heap, index, countMap) {
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && compare(heap[child], heap[child + 1], countMap)) {
            child++;
        }
        if (compare(heap[index], heap[child], countMap)) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}
