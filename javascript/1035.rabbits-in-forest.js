/**
 * @param answers: some subset of rabbits (possibly all of them) tell
 * @return: the minimum number of rabbits that could be in the forest.
 */
const numRabbits = function (answers) {
    const map = {};
    for (let i = 0; i < answers.length; i++) {
        map[answers[i]] = (map[answers[i]] || 0) + 1;
    }
    let result = 0;
    const keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        const answer = +keys[i];
        result += (answer + 1) * Math.ceil(map[answer] / (answer + 1));
    }
    return result;
};
