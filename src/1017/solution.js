export class Solution {
    /**
     * @param color: the given color
     * @return: a 7 character color that is most similar to the given color
     */
    similarRGB (color) {
        let minDiff = 3 * 255 ** 2;
        let result = '';
        const R = parseInt(`0x${color.slice(1, 3)}`, 16);
        const G = parseInt(`0x${color.slice(3, 5)}`, 16);
        const B = parseInt(`0x${color.slice(5)}`, 16);

        console.log(R, G, B);
        for (let r = 0; r < 16; r++) {
            for (let g = 0; g < 16; g++) {
                for (let b = 0; b < 16; b++) {
                    const diff = (R - r * 16 - r) ** 2 + (G - g * 16 - g) ** 2 + (B - b * 16 - b) ** 2;
                    if (diff < minDiff) {
                        minDiff = diff;
                        result = `#${r.toString(16).repeat(2)}${g.toString(16).repeat(2)}${b.toString(16).repeat(2)}`;
                    }
                }
            }
        }
        return result;
    }
}
