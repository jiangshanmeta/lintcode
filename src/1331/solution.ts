export class Solution {
    /**
     * @param score: Each student's grades
     * @param ask: A series of inquiries
     * @return: Find the percentage of each question asked
     */
    englishSoftware (score: number[], ask: number[]): number[] {
        const counts = new Array<number>(101).fill(0);

        for (let i = 0; i < score.length; i++) {
            counts[score[i]]++;
        }
        for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i - 1];
        }
        return ask.map((item) => {
            return Math.floor((counts[score[item - 1]] - 1) * 100 / score.length);
        });
    }
}
