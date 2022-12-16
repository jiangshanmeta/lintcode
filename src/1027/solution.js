/**
 * @param ghosts: a 2D integer array
 * @param target: a integer array
 * @return: return boolean
 */
const escapeGhosts = function (ghosts, target) {
    const DIS = Math.abs(target[0]) + Math.abs(target[1]);
    for (let i = 0; i < ghosts.length; i++) {
        const [x, y, ] = ghosts[i];
        const dis = Math.abs(target[0] - x) + Math.abs(target[1] - y);
        if (dis <= DIS) {
            return false;
        }
    }
    return true;
};
