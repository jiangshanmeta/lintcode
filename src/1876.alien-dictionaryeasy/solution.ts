export class Solution {
    /**
     * @param words: the array of string means the list of words
     * @param order: a string indicate the order of letters
     * @return: return true or false
     */
    isAlienSorted (words: string[], order: string): boolean {
        // write your code here.
        const map = new Map<string, number>();
        for (let i = 0; i < order.length; i++) {
            map.set(order[i], i);
        }
        const isGreater = (a:string, b:string) => {
            for (let i = 0; i < Math.min(a.length, b.length); i++) {
                const order = map.get(b[i]) - map.get(a[i]);
                if (order > 0) {
                    return true;
                } else if (order < 0) {
                    return false;
                }
            }

            return b.length >= a.length;
        };

        for (let i = 1; i < words.length; i++) {
            if (!isGreater(words[i - 1], words[i])) {
                return false;
            }
        }

        return true;
    }
}
