export class Interval {
    start :number;
    end :number;
    constructor (start :number, end :number) {
        this.start = start;
        this.end = end;
    }
}

export class Solution {
    /**
   * @param intervals: interval list.
   * @return: A new interval list.
   */
    merge (intervals: Interval[]): Interval[] {
        if (intervals.length === 0) {
            return intervals;
        }
        intervals.sort((a, b) => a.start - b.start);
        const result = [intervals[0], ];
        for (let i = 1; i < intervals.length; i++) {
            const last = result[result.length - 1];
            if (intervals[i].start > last.end) {
                result.push(intervals[i]);
            } else {
                last.end = Math.max(last.end, intervals[i].end);
            }
        }
        return result;
    }
}
