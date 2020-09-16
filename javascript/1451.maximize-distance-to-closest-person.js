/**
 * @param seats: an array
 * @return: the maximum distance
 */
const maxDistToClosest = function (seats) {
    let index = 0;
    while (index < seats.length && seats[index] === 0) {
        index++;
    }
    let maxDis = index;
    while (index < seats.length) {
        while (index < seats.length && seats[index] === 1) {
            index++;
        }
        const lastPerson = index - 1;
        while (index < seats.length && seats[index] === 0) {
            index++;
        }
        if (index === seats.length) {
            maxDis = Math.max(maxDis, seats.length - 1 - lastPerson);
        } else {
            const mid = (lastPerson + index) >> 1;
            maxDis = Math.max(
                maxDis,
                Math.min(index - mid, mid - lastPerson)
            );
        }
    }
    return maxDis;
};
