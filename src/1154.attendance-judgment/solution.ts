export class Solution {
    /**
     * @param record: Attendance record.
     * @return: If the student should be punished return true, else return false.
     */
    judge (record: string): boolean {
        let D = 0;
        let L = 0;
        for (let i = 0; i < record.length; i++) {
            if (record[i] === 'A') {
                L = 0;
            } else if (record[i] === 'D') {
                D++;
                L = 0;
                if (D === 2) {
                    return true;
                }
            } else if (record[i] === 'L') {
                L++;
                if (L === 3) {
                    return true;
                }
            }
        }
        return false;
    }
}
