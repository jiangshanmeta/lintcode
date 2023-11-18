function unique (items:string) {
    const set = new Set<string>();
    const result:string[] = [];
    for (let i = 0; i < items.length; i++) {
        if (set.has(items[i])) {
            continue;
        }
        result.push(items[i]);
        set.add(items[i]);
    }
    return result;
}

export class Solution {
    /**
   * @param time: the given time
   * @return: the next closest time
   */
    nextClosestTime (time: string): string {
        const options = unique(time.slice(0, 2) + time.slice(3));

        let result = time;
        const start = ((+time[0]) * 10 + (+time[1])) * 60 + (+time[3]) * 10 + (+time[4]);
        let diff = 24 * 60;
        for (const h1 of options) {
            const h1n = +h1;
            if (h1n > 2) {
                continue;
            }
            for (const h2 of options) {
                const h2n = +h2;
                if (h1n === 2 && h2n > 4) {
                    continue;
                }

                for (const m1 of options) {
                    const m1n = +m1;
                    if (m1n > 5) {
                        continue;
                    }

                    for (const m2 of options) {
                        let ts = (h1n * 10 + h2n) * 60 + (m1n * 10) + (+m2);
                        if (ts <= start) {
                            ts += 24 * 60;
                        }

                        const cd = ts - start;

                        if (cd < diff) {
                            diff = cd;
                            result = `${h1}${h2}:${m1}${m2}`;
                        }
                    }
                }
            }
        }

        return result;
    }
}
