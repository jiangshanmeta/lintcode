/**
 * @param num: a non negative integer number
 * @return: an array represent the number of 1's in their binary
 */
const countBits = function (num) {
    const result = new Array(num+1);
    result[0] = 0;
    for(let i=1;i<result.length;i++){
        result[i] = result[i>>1]+(i&1);
    }
    return result;
}

