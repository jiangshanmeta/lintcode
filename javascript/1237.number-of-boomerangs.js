/**
 * @param points: a 2D array
 * @return: the number of boomerangs
 */
const numberOfBoomerangs = function (points) {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        // key 是其他点到这一点距离的平方 value是出现的次数
        const disCountMap = {};
        for (let j = 0; j < points.length; j++) {
            if (i === j) {
                continue;
            }
            const dis = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
            disCountMap[dis] = (disCountMap[dis] || 0) + 1;
        }
        const dises = Object.keys(disCountMap);
        for (let j = 0; j < dises.length; j++) {
            const count = disCountMap[dises[j]];
            result += count * (count - 1);
        }
    }
    return result;
};
