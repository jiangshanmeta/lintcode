export class Solution {
    /**
     * @param a: an integer array
     * @return: an integer array
     */
    getDistanceMetrics (a: number[]): number[] {
        const groupByValue = a.reduce((map, item, index) => {
            if (map[item]) {
                map[item].push(index);
            } else {
                map[item] = [index, ];
            }
            return map;
        }, {} as Record<number, number[]>);

        const results:number[] = new Array<number>(a.length).fill(0);

        for (const indexs of Object.values(groupByValue)) {
            let count = 1;
            let sum = indexs[0];
            for (let i = 1; i < indexs.length; i++) {
                const index = indexs[i];
                results[index] += index * count - sum;
                sum += index;
                count++;
            }

            count = 1;
            sum = indexs[indexs.length - 1];
            for (let i = indexs.length - 2; i > -1; i--) {
                const index = indexs[i];
                results[index] += sum - index * count;
                sum += index;
                count++;
            }
        }

        return results;
    }
}
