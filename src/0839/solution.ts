
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
   * @param list1: one of the given list
   * @param list2: another list
   * @return: the new sorted list of interval
   */
    mergeTwoInterval (list1: Interval[], list2: Interval[]): Interval[] {
        const result:Interval[] = [];
        let index1 = 0;
        let index2 = 0;
        const append = (i:Interval) => {
            if (result.length === 0) {
                result.push(i);
                return;
            }
            const last = result[result.length - 1];
            if (last.end < i.start) {
                result.push(i);
            } else {
                last.end = Math.max(last.end, i.end);
            }
        };
        while (index1 < list1.length && index2 < list2.length) {
            const i1 = list1[index1];
            const i2 = list2[index2];
            if (i1.end < i2.start) {
                append(i1);
                index1++;
            } else if (i2.end < i1.start) {
                append(i2);
                index2++;
            } else {
                append(new Interval(Math.min(i1.start, i2.start), Math.max(i1.end, i2.end)));
                index1++;
                index2++;
            }
        }
        while (index1 < list1.length) {
            append(list1[index1++]);
        }
        while (index2 < list2.length) {
            append(list2[index2++]);
        }
        return result;
    }
}
