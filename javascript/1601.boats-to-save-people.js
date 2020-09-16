/**
 * @param people: The i-th person has weight people[i].
 * @param limit: Each boat can carry a maximum weight of limit.
 * @return: Return the minimum number of boats to carry every given person.
 */
const numRescueBoats = function (people, limit) {
    people.sort((a, b) => b - a);
    let index1 = 0;
    let index2 = people.length - 1;
    let count = 0;
    while (index1 <= index2) {
        count++;
        if (people[index1] + people[index2] <= limit) {
            index2--;
        }
        index1++;
    }

    return count;
};
