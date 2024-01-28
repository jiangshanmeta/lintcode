export class Solution {
    /**
     * @param secret: An string
     * @param guess: An string
     * @return: An string
     */
    getHint (secret: string, guess: string): string {
        const counts1 = new Array<number>(10).fill(0);
        const counts2 = new Array<number>(10).fill(0);
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < secret.length; i++) {
            if (secret[i] === guess[i]) {
                bulls++;
            } else {
                counts1[+secret[i]]++;
                counts2[+guess[i]]++;
            }
        }
        for (let i = 0; i < 10; i++) {
            cows += Math.min(counts1[i], counts2[i]);
        }
        return `${bulls}A${cows}B`;
    }
}
