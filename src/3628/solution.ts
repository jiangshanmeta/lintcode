export class Solution {
    /**
     * @param items: results a list of [student_id, score]
     * @return: find the average of 5 highest scores for each student
     */
    highFive (items: number[][]): number[][] {
        const map:Record<number, number[]> = {};
        for (const [id, score, ] of items) {
            if (map[id]) {
                map[id].push(score);
            } else {
                map[id] = [score, ];
            }
        }
        return Object.keys(map).sort((a, b) => +a - (+b)).map((id) => {
            const sum = map[id].sort((a, b) => b - a).slice(0, 5).reduce((acc, item) => acc + item, 0);
            return [+id, Math.floor(sum / 5), ];
        });
    }
}
