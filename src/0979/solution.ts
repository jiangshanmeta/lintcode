export class Solution {
    /**
     * @param num: a string
     * @return: Is it a valid additive number
     */
    isAdditiveNumber (num: string): boolean {
        const backTracking = (sequence:number[], index:number):boolean => {
            if (index === num.length) {
                return sequence.length >= 3;
            }
            if (num[index] === '0') {
                if (sequence.length >= 2 && sequence[sequence.length - 1] + sequence[sequence.length - 2] !== 0) {
                    return false;
                }
                sequence.push(0);
                if (backTracking(sequence, index + 1)) {
                    return true;
                }
                sequence.pop();
            } else {
                for (let end = index + 1; end <= num.length; end++) {
                    const newNum = +num.slice(index, end);
                    if (sequence.length < 2) {
                        sequence.push(newNum);
                        if (backTracking(sequence, end)) {
                            return true;
                        }
                        sequence.pop();
                    } else {
                        if (sequence[sequence.length - 1] + sequence[sequence.length - 2] !== newNum) {
                            continue;
                        }
                        sequence.push(newNum);
                        if (backTracking(sequence, end)) {
                            return true;
                        }
                        sequence.pop();
                    }
                }
            }

            return false;
        };
        return backTracking([], 0);
    }
}
