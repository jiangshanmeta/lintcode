export class Solution {
    /**
     * @param n: the positive number
     * @return: the string of hexspeak
     */
    toHexspeak (n: number): string {
        if (n === 0) {
            return 'O';
        }
        const config = ['O', 'I', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', ];
        const set = new Set([0, 1, 10, 11, 12, 13, 14, 15, ]);
        const stack:string[] = [];
        while (n > 0) {
            const m = n % 16;
            if (!set.has(m)) {
                return 'ERROR';
            }
            stack.push(config[m]);
            n = (n - m) / 16;
        }
        return stack.reverse().join('');
    }
}
