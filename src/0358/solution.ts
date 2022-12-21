export class Solution {
    /**
     * @param trees: the positions of trees.
     * @param d: the minimum beautiful interval.
     * @return: the minimum number of trees to remove to make trees beautiful.
     */
    treePlanning (trees: number[], d: number): number {
        let result = 0;
        let index = 0;
        while (index < trees.length) {
            const max = trees[index++] + d;
            while (index < trees.length && trees[index] < max) {
                result++;
                index++;
            }
        }

        return result;
    }
}
