export class Solution {
    /**
     * @param data: an array of integers
     * @return: whether it is a valid utf-8 encoding
     */
    validUtf8 (data: number[]): boolean {
        if (data.length === 0) {
            return false;
        }
        let index = 0;
        while (index < data.length) {
            const first = data[index].toString(2).padStart(8, '0');
            if (first[0] === '0') {
                index++;
                continue;
            }
            const count = first.indexOf('0');
            if (count === -1 || count > 4) {
                return false;
            }
            if (index + count > data.length) {
                return false;
            }

            for (let i = index + 1; i < index + count; i++) {
                if (data[i] < 128 || data[i] > 191) {
                    return false;
                }
            }

            index += count;
        }

        return true;
    }
}
