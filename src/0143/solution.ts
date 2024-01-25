export class Solution {
    /**
     * @param colors: A list of integer
     * @param k: An integer
     * @return: nothing
     */
    sortColors2 (colors: number[], k: number) {
        colors.sort((a, b) => a - b);
    }
}
