export class Solution {
    /**
     * @param s: a string
     * @return: Whether is a cumulative number
     */
    isCumulativeNumber (s: string): boolean {
        const backTracking = (start:number, seq:number[]):boolean => {
            if (start === s.length) {
                return seq.length > 2;
            }
            for (let end = start; end < s.length; end++) {
                if (end > start && s[start] === '0') {
                    break;
                }
                const n = +s.slice(start, end + 1);
                if (seq.length < 2 || n === seq[seq.length - 1] + seq[seq.length - 2]) {
                    seq.push(n);
                    const res = backTracking(end + 1, seq);
                    if (res) {
                        return res;
                    }
                    seq.pop();
                }
            }

            return false;
        };

        return backTracking(0, []);
    }
}
