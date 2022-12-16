export class Solution {
    /**
     * @param musics: the musics
     * @return: calc the number of pair of music
     */
    musicPairs (musics: number[]): number {
        const counts = new Array<number>(61).fill(0);
        for (let i = 0; i < musics.length; i++) {
            counts[musics[i]]++;
        }
        let result = 0;
        for (let i = 1; i < 30; i++) {
            result += counts[i] * counts[60 - i];
        }
        result += counts[30] * (counts[30] - 1) / 2;
        result += counts[60] * (counts[60] - 1) / 2;

        return result;
    }
}
