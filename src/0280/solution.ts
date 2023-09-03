export class Solution {
    /**
     * @param x: an array of integers, the x coordinates of each city[i]
     * @param y: an array of integers, the y coordinates of each city[i]
     * @param c: an array of strings that represent the names of each city[i]
     * @param q: an array of strings that represent the names of query locations
     * @return: the closest city for each query
     */
    nearestNeighbor (x: number[], y: number[], c: string[], q: string[]): string[] {
        const c2i = new Map<string, number>();
        for (let i = 0; i < c.length; i++) {
            c2i.set(c[i], i);
        }
        const gbyx = x.reduce<Map<number, number[]>>((acc, item, index) => {
            if (!acc.has(item)) {
                acc.set(item, [index, ]);
            } else {
              acc.get(item)!.push(index);
            }
            return acc;
        }, new Map<number, number[]>());

        const gbyy = y.reduce<Map<number, number[]>>((acc, item, index) => {
            if (!acc.has(item)) {
                acc.set(item, [index, ]);
            } else {
              acc.get(item)!.push(index);
            }
            return acc;
        }, new Map<number, number[]>());

        return q.map((cn) => {
            const cindex = c2i.get(cn)!;
            const xval = x[cindex];
            const yval = y[cindex];
            let minDis = Infinity;
            let result = 'NONE';

            if (gbyx.has(xval)) {
                const indexs = gbyx.get(xval)!;
                for (let i = 0; i < indexs.length; i++) {
                    if (indexs[i] === cindex) {
                        continue;
                    }
                    const nx = x[indexs[i]];
                    const ny = y[indexs[i]];
                    const dis = Math.abs(xval - nx) + Math.abs(yval - ny);
                    if (dis < minDis) {
                        minDis = dis;
                        result = c[indexs[i]];
                    } else if (dis === minDis && c[indexs[i]] < result) {
                        result = c[indexs[i]];
                    }
                }
            }
            if (gbyy.has(yval)) {
                const indexs = gbyy.get(yval)!;
                for (let i = 0; i < indexs.length; i++) {
                    if (indexs[i] === cindex) {
                        continue;
                    }

                    const nx = x[indexs[i]];
                    const ny = y[indexs[i]];
                    const dis = Math.abs(xval - nx) + Math.abs(yval - ny);
                    if (dis < minDis) {
                        minDis = dis;
                        result = c[indexs[i]];
                    } else if (dis === minDis && c[indexs[i]] < result) {
                        result = c[indexs[i]];
                    }
                }
            }

            return result;
        });
    }
}
