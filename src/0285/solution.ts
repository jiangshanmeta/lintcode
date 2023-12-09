export class Solution {
    /**
     * @param arr: the height of all buildings
     * @return: how many buildings can he see at the location of each building
     */
    tallBuilding (arr: number[]): number[] {
        const rightStack = [arr[arr.length - 1], ];
        const rightResults = new Array<number>(arr.length).fill(0);
        for (let i = arr.length - 2; i >= 0; i--) {
            rightResults[i] = rightStack.length;
            while (rightStack.length && arr[i] >= rightStack[rightStack.length - 1]) {
                rightStack.pop();
            }
            rightStack.push(arr[i]);
        }
        const result = new Array<number>(arr.length).fill(1);
        const leftStack:number[] = [];
        for (let i = 0; i < arr.length; i++) {
            result[i] += leftStack.length + rightResults[i];
            while (leftStack.length && arr[i] >= leftStack[leftStack.length - 1]) {
                leftStack.pop();
            }
            leftStack.push(arr[i]);
        }
        return result;
    }
}
