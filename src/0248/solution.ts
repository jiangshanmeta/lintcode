export class Solution {
    /**
     * @param a: An integer array
     * @param queries: The query list
     * @return: The number of element in the array that are smaller that the given integer
     */
    countOfSmallerNumber (a: number[], queries: number[]): number[] {
        if (a.length === 0) {
            return new Array(queries.length).fill(0);
        }

        const max = Math.max(...a);
        const b = new Array<number>(max + 1).fill(0);
        for (const n of a) {
            b[n]++;
        }

        const segmentTree = new Array<number>(4 * b.length).fill(0);

        function buildSegmentTree (rootIndex:number, left:number, right:number) {
            if (left === right) {
                segmentTree[rootIndex] = b[left];
                return;
            }
            const leftRootIndex = 2 * rootIndex + 1;
            const rightRootIndex = leftRootIndex + 1;
            const mid = left + ((right - left) >> 1);

            buildSegmentTree(leftRootIndex, left, mid);
            buildSegmentTree(rightRootIndex, mid + 1, right);
            segmentTree[rootIndex] = segmentTree[leftRootIndex] + segmentTree[rightRootIndex];
        }
        buildSegmentTree(0, 0, max);

        function querySegmentTree (rootIndex:number, treeLeft:number, treeRight:number, queryLeft:number, queryRight:number):number {
            if (treeLeft === queryLeft && treeRight === queryRight) {
                return segmentTree[rootIndex];
            }
            const leftRootIndex = 2 * rootIndex + 1;
            const rightRootIndex = leftRootIndex + 1;
            const mid = treeLeft + ((treeRight - treeLeft) >> 1);
            if (queryLeft > mid) {
                return querySegmentTree(rightRootIndex, mid + 1, treeRight, queryLeft, queryRight);
            } else if (queryRight < mid + 1) {
                return querySegmentTree(leftRootIndex, treeLeft, mid, queryLeft, queryRight);
            }
            return querySegmentTree(leftRootIndex, treeLeft, mid, queryLeft, mid) + querySegmentTree(rightRootIndex, mid + 1, treeRight, mid + 1, queryRight);
        }

        return queries.map((query) => {
            if (query <= 0) {
                return 0;
            }
            query--;
            if (query > max) {
                query = max;
            }
            return querySegmentTree(0, 0, max, 0, query);
        });
    }
}
