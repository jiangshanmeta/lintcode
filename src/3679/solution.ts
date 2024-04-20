export class Solution {
    /**
     * @param colors: the color array
     * @param queries: the queries array
     * @return: the shortest distance array of queries
     */
    shortestDistanceColor (colors: number[], queries: number[][]): number[] {
        const N = colors.length;
        const nearestIndexs = new Array<number[]>(N);
        let a = -1;
        let b = -1;
        let c = -1;
        for (let i = 0; i < colors.length; i++) {
            if (colors[i] === 1) {
                a = i;
            } else if (colors[i] === 2) {
                b = i;
            } else {
                c = i;
            }
            nearestIndexs[i] = [
                a === -1 ? N : i - a,
                b === -1 ? N : i - b,
                c === -1 ? N : i - c,
            ];
        }

        a = N;
        b = N;
        c = N;
        for (let i = colors.length - 1; i > -1; i--) {
            if (colors[i] === 1) {
                a = i;
            } else if (colors[i] === 2) {
                b = i;
            } else {
                c = i;
            }
            if (a !== N) {
                nearestIndexs[i][0] = Math.min(nearestIndexs[i][0], a - i);
            }
            if (b !== N) {
                nearestIndexs[i][1] = Math.min(nearestIndexs[i][1], b - i);
            }
            if (c !== N) {
                nearestIndexs[i][2] = Math.min(nearestIndexs[i][2], c - i);
            }
        }

        return queries.map(([i, c, ]) => {
            const res = nearestIndexs[i][c - 1];
            return res === N ? -1 : res;
        });
    }
}
