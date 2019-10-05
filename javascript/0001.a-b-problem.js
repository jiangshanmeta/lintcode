/**
 * @param a: An integer
 * @param b: An integer
 * @return: The sum of a and b 
 */
const aplusb = function (a, b) {
    // a >>> 0 b>>> 0是把有符号数转换为无符号数
    // 最终结果 >> 0 是把无符号数转化为有符号数
    return helper(a>>>0,b>>>0) >> 0
}

function helper(a,b){
    if(a === 0){
        return b;
    }
    if(b === 0){
        return a;
    }

    return helper(a^b,(a&b)<<1);
}