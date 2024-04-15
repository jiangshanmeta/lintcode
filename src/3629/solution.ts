export class Solution {
    /**
     * @param arr1:
     * @param arr2:
     * @param arr3:
     * @return: The intersection of three arrays
     */
    arraysIntersection (arr1: number[], arr2: number[], arr3: number[]): number[] {
        let index1 = 0;
        let index2 = 0;
        let index3 = 0;
        const result:number[] = [];
        while (index1 < arr1.length && index2 < arr2.length && index3 < arr3.length) {
            const MAX = Math.max(arr1[index1], arr2[index2], arr3[index3]);
            while (index1 < arr1.length && arr1[index1] < MAX) {
                index1++;
            }
            while (index2 < arr2.length && arr2[index2] < MAX) {
                index2++;
            }
            while (index3 < arr3.length && arr3[index3] < MAX) {
                index3++;
            }
            if (index1 < arr1.length && index2 < arr2.length && index3 < arr3.length && arr1[index1] === MAX && arr2[index2] === MAX && arr3[index3] === MAX) {
                result.push(MAX);
                index1++;
                index2++;
                index3++;
            }
        }
        return result;
    }
}
