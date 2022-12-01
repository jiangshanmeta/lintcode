function sumDigit (num:number) {
    let result = 0;
    while (num) {
        const digit = num % 10;
        result += digit;
        num = (num - digit) / 10;
    }
    return result;
}

export class Solution {
    /**
     * @param a: An Integer array
     * @return: returns the maximum sum of two numbers
     */
    maximumSum (a: number[]): number {
        let result = -1;
        const map = new Map<number, number[]>();
        for (const num of a) {
            const key = sumDigit(num);
            if (!map.has(key)) {
                map.set(key, [num, ]);
            } else {
                const list = map.get(key);
                if (list.length === 1) {
                    if (list[0] < num) {
                        list.push(num);
                    } else {
                        list.unshift(num);
                    }
                } else if (list[1] <= num) {
                    list[0] = list[1];
                    list[1] = num;
                } else if (list[0] < num) {
                    list[0] = num;
                }
                result = Math.max(result, list[0] + list[1]);
            }
        }

        return result;
    }
}
