function supplant (l:string[], L:number) {
    let index = 0;
    while (l.length < L) {
        l.push(l[index++]);
    }
}

export class Solution {
    /**
   * @param grids: a maxtrix with alphabet
   * @return: return sorted lists
   */
    counterDiagonalSort (grids: string[][]): string[][] {
        const M = grids.length;
        const N = grids[0].length;
        const L = Math.min(M, N);
        const sequences:string[][] = [];
        for (let i = 0; i < M; i++) {
            const current:string[] = [];
            let x = i;
            let y = 0;
            while (x > -1 && y < N) {
                current.push(grids[x--][y++]);
            }
            supplant(current, L);
            sequences.push(current);
        }
        for (let j = 1; j < N; j++) {
            const current:string[] = [];
            let x = M - 1;
            let y = j;
            while (x > -1 && y < N) {
                current.push(grids[x--][y++]);
            }
            supplant(current, L);
            sequences.push(current);
        }
        sequences.sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (a[i] < b[i]) {
                    return -1;
                } else if (a[i] > b[i]) {
                    return 1;
                }
            }
            return 0;
        });

        return sequences;
    }
}
