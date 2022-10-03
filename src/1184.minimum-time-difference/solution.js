/**
 * @param timePoints: a list of 24-hour clock time points
 * @return: the minimum minutes difference between any two time points in the list
 */
const findMinDifference = function (timePoints) {
    const times = [];
    for (let i = 0; i < timePoints.length; i++) {
        const time = timePoints[i];
        times.push(time.substring(0, 2) * 60 + (+time.substring(3)));
    }
    times.sort((a, b) => a - b);

    let result = times[times.length - 1] - times[0];
    result = Math.min(result, 1440 - result);
    for (let i = 1; i < times.length; i++) {
        result = Math.min(result, times[i] - times[i - 1]);
    }
    return result;
};
