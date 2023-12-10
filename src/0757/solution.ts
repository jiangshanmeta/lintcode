function isAsc (arr:number[]) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function isDesc (arr:number[]) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            return false;
        }
    }
    return true;
}

export class Solution {
    /**
     * @param arr: an array of integers
     * @return: the length of the shortest possible subsequence of integers that are unordered
     */
    shortestUnorderedArray (arr: number[]): number {
        if (isAsc(arr) || isDesc(arr)) {
            return 0;
        }
        return 3;
    }
}
