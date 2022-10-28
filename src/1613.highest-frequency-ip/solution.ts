export class Solution {
    /**
     * @param ipLines: ip  address
     * @return: return highestFrequency ip address
     */
    highestFrequency (ipLines: string[]): string {
        const map = new Map<string, number>();
        let result = '';
        let maxCount = 0;
        for (const ip of ipLines) {
            let count = 1;
            if (map.has(ip)) {
                count += map.get(ip);
            }
            map.set(ip, count);
            if (count > maxCount) {
                maxCount = count;
                result = ip;
            }
        }

        return result;
    }
}
