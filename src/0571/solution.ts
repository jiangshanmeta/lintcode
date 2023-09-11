export class Solution {
    /**
     * @param arr: An array
     * @return: A boolean
     */
    isUnique (arr: number[]): boolean {
        const map = new Array<boolean>(arr.length);
        for (const item of arr) {
            if (map[item]) {
                return false;
            }
            map[item] = true;
        }

        return true;
    }
}
