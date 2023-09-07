const char2Index = (s:string) => {
    return s.charCodeAt(0) - 97;
};

export class Solution {
    /**
   * @param s: a string
   * @return: return a string
   */
    originalDigits (s: string): string {
        const charCounts = new Array<number>(26).fill(0);
        const digiCounts = new Array<number>(10).fill(0);

        const update = (digit:number, char:string, en:string) => {
            const index = char2Index(char);
            digiCounts[digit] = charCounts[index];
            for (let i = 0; i < en.length; i++) {
                charCounts[char2Index(en[i])] -= digiCounts[digit];
            }
        };

        for (let i = 0; i < s.length; i++) {
            charCounts[s.charCodeAt(i) - 97]++;
        }

        update(0, 'z', 'zero');
        update(2, 'w', 'two');
        update(4, 'u', 'four');
        update(6, 'x', 'six');
        update(8, 'g', 'eight');
        update(3, 'h', 'three');
        update(7, 's', 'seven');
        update(5, 'v', 'five');
        update(1, 'o', 'one');
        update(9, 'i', 'nine');

        return digiCounts.map((count, digit) => {
            if (count === 0) {
                return '';
            }
            return String(digit).repeat(count);
        }).join('');
    }
}
