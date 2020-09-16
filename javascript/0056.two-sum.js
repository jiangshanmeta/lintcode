/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1, index2] (index1 < index2)
 */
const twoSum = function (numbers, target) {
    const map = {};
    for (let i = 0; i < numbers.length; i++) {
        if (map[target - numbers[i]] !== undefined) {
            return [map[target - numbers[i]], i, ];
        }
        map[numbers[i]] = i;
    }
};
