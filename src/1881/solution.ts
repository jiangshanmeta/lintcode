export class Solution {
    /**
     * @param n: the number of rows
     * @param s: a list of reserved seats
     * @return: An integer
     */
    solution (n: number, s: string): number {
        if (s.length === 0) {
            return 2 * n;
        }
        const seats = new Array<boolean[]>(n);
        for (let i = 0; i < n; i++) {
            seats[i] = new Array<boolean>(10);
        }

        for (const str of s.split(' ')) {
            const offset = parseInt(str) - 1;
            const index = str.charCodeAt(str.length - 1) - 65;
            seats[offset][index] = true;
        }

        let res = 0;
        for (let i = 0; i < seats.length; i++) {
            const row = seats[i];
            if (!row[1] && !row[2] && !row[3] && !row[4]) {
                res++;
                row[3] = true;
                row[4] = true;
            }
            if (!row[3] && !row[4] && !row[5] && !row[6]) {
                res++;
                row[5] = true;
                row[6] = true;
            }
            if (!row[5] && !row[6] && !row[7] && !row[8]) {
                res++;
            }
        }
        return res;
    }
}
