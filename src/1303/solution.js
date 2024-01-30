export class Solution {
    /**
     * hIndex
     *
     * @param citations: a list of integers
     * @return: return a integer
     */
    hIndex (citations) {
        let low = 0;
        let high = Math.min(citations.length, citations[citations.length - 1]);
        let res = 0;
        while (low <= high) {
            const mid = (low + high) >> 1;
            if (citations[citations.length - mid] >= mid) {
                res = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return res;
    }
}
