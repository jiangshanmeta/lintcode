export class Solution {
    /**
     * @param prices: a list of integer
     * @return: return the actual prices
     */
    finalDiscountedPrice (prices: number[]): number[] {
        const result:number[] = [];
        const indexStack:number[] = [];
        for (let i = 0; i < prices.length; i++) {
            while (indexStack.length && prices[indexStack[indexStack.length - 1]] >= prices[i]) {
                const index = indexStack.pop();
                result[index] -= prices[i];
            }
            result.push(prices[i]);
            indexStack.push(i);
        }

        return result;
    }
}
