/**
 * @param target: the target
 * @param position: the initial position
 * @param speed: the speed
 * @return: How many car fleets will arrive at the destination
 */
const carFleet = function (target, position, speed) {
    const positionWithSpeed = position.map((position, index) => {
        return {
            position,
            time: (target - position) / speed[index],
        };
    }).sort((a, b) => b.position - a.position);
    const stack = [];
    for (let i = 0; i < positionWithSpeed.length; i++) {
        if (stack.length === 0 || positionWithSpeed[i].time > stack[stack.length - 1]) {
            stack.push(positionWithSpeed[i].time);
        }
    }
    return stack.length;
};
