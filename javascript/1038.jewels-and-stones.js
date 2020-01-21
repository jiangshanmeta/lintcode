/**
 * @param J: the types of stones that are jewels
 * @param S: representing the stones you have
 * @return: how many of the stones you have are also jewels
 */
const numJewelsInStones = function (J, S) {
    const map = {};
    for(let i=0;i<J.length;i++){
        map[J[i]] = true;
    }
    let count = 0;
    for(let i=0;i<S.length;i++){
        map[S[i]] && count++;
    }
    return count;
}
