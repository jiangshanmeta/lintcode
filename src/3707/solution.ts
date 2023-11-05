export class Solution {
    /**
     * @param bookings: Flight booking information
     * @param n: Total number of flights
     * @return: Number of seats booked per flight
     */
    corpFlightBookings (bookings: number[][], n: number): number[] {
        const result = new Array<number>(n + 1).fill(0);
        for (const [start, end, seats, ] of bookings) {
            result[start - 1] += seats;
            result[end] -= seats;
        }
        result.pop();
        for (let i = 1; i < result.length; i++) {
            result[i] += result[i - 1];
        }
        return result;
    }
}
