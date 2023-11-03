export class Solution {
    /**
     * @param elements: A list of recommended elements.
     * @param n: [picture P] can appear at most 1 in every n
     * @return: Return the scattered result.
     */
    scatter (elements: string[], n: number): string[] {
        let index = elements.findIndex((item) => item[0] === 'P') + 1;
        const result = elements.slice(0, index);
        const ps:string[] = [];
        const vs:string[] = [];
        while (index < elements.length) {
            if (elements[index][0] === 'P') {
                ps.push(elements[index++]);
            } else {
                vs.push(elements[index++]);
            }
        }
        let indexP = 0;
        let indexV = 0;
        while (indexV < vs.length) {
            let count = 0;
            while (indexV < vs.length && count < n - 1) {
                count++;
                result.push(vs[indexV++]);
            }
            if (indexP === ps.length) {
                break;
            }
            if (count === n - 1) {
                result.push(ps[indexP++]);
            }
        }

        return result;
    }
}
