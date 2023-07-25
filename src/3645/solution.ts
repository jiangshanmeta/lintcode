export class Solution {
    /**
     * @param s: the string
     * @param shift: the shift operations
     * @return: the string after shifts
     */
    stringShift (s: string, shift: number[][]): string {
        let move = 0;
        for (let i = 0; i < shift.length; i++) {
            const [dir, step, ] = shift[i];
            if (dir === 0) {
                move -= step;
            } else {
                move += step;
            }
        }
        move %= s.length;
        if (move < 0) {
            move += s.length;
        }
        return s.slice(s.length - move) + s.slice(0, s.length - move);
    }
}
