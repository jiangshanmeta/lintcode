export class Solution {
    /**
     * @param keyboard: Customized keyboard strings
     * @param word: A string
     * @return: Total number of moves
     */
    calculateTime (keyboard: string, word: string): number {
        const map = new Map<string, number>();
        for (let i = 0; i < keyboard.length; i++) {
            map.set(keyboard[i], i);
        }
        let result = 0;
        let last = 0;
        for (let i = 0; i < word.length; i++) {
            const index = map.get(word[i])!;
            result += Math.abs(index - last);
            last = index;
        }
        return result;
    }
}
