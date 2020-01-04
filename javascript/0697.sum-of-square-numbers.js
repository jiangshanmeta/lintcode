/**
 * @param num: the given number
 * @return: whether whether there're two integers
 */
const checkSumOfSquareNumbers = function (num) {
    const map = {};
    const candidate = [];
    let i = 0;
    while(i*i<=num){
        candidate.push(i*i);
        map[i*i] = true;
        i++;
    }
    for(let i=0;i<candidate.length;i++){
        if(map[num-candidate[i]]){
            return true;
        }
    }
    return false;
}
