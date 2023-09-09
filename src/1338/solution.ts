export class Solution {
    /**
     * @param cars: integer array of length denoting the parking slots where cars are parked
     * @param k: integer denoting the number of cars that have to be covered by the roof
     * @return: return the minium length of the roof that would cover k cars
     */
    parkingDilemma (cars: number[], k: number): number {
        cars.sort((a, b) => a - b);
        let result = cars[k - 1] - cars[0];
        for (let i = 1; i + k - 1 < cars.length; i++) {
            result = Math.min(result, cars[i + k - 1] - cars[i]);
        }
        return result + 1;
    }
}
