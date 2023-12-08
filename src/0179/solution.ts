export class Solution {
    /**
     * @param n: An integer
     * @param m: An integer
     * @param i: A bit position
     * @param j: A bit position
     * @return: An integer
     */
    updateBits (n: number, m: number, i: number, j: number): number {
        const list = (n >>> 0).toString(2).padStart(32, '0').split('');
        const mstr = (m >>> 0).toString(2);
        let offset = i;
        while (offset <= j) {
            list[list.length - 1 - offset] = '0';
            offset++;
        }

        let index = mstr.length - 1;
        while (index > -1) {
            list[list.length - (mstr.length - index) - i] = mstr[index];
            index--;
        }
        return parseInt(list.join(''), 2) >> 0;
    }
}
