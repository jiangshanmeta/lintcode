export class Solution {
    /**
     * @param year: a number year
     * @param month: a number month
     * @return: return the number of days of the month.
     */
    getTheMonthDays (year: number, month: number): number {
        const dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
        if (month !== 2) {
            return dates[month - 1];
        }
        const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
        if (isLeap) {
            return 29;
        }
        return 28;
    }
}
