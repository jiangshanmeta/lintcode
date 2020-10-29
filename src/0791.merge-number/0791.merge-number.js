/**
 * @param numbers: the numbers
 * @return: the minimum cost
 */
const mergeNumber = function (numbers) {
    if (numbers.length < 3) {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }
    // 最小堆
    for (let i = (numbers.length - 2) >> 1; i > -1; i--) {
        sideDown(numbers, i);
    }
    let result = 0;
    while (numbers.length > 1) {
        const a = numbers[0];
        numbers[0] = numbers.pop();
        sideDown(numbers, 0);
        const cost = numbers[0] + a;
        result += cost;
        numbers[0] = cost;
        sideDown(numbers, 0);
    }
    return result;
};

function swap (heap, i, j) {
    const tmp = heap[i];
    heap[i] = heap[j];
    heap[j] = tmp;
}

function sideUp (heap, index) {
    while (index > 0) {
        const parent = (index - 1) >> 1;
        if (heap[parent] > heap[index]) {
            swap(heap, index, parent);
            index = parent;
        } else {
            break;
        }
    }
}

function sideDown (heap, index) {
    while (2 * index + 1 < heap.length) {
        let child = 2 * index + 1;
        if (child + 1 < heap.length && heap[child + 1] < heap[child]) {
            child++;
        }
        if (heap[index] > heap[child]) {
            swap(heap, index, child);
            index = child;
        } else {
            break;
        }
    }
}
