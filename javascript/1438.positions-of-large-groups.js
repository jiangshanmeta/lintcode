/**
 * @param S: a string
 * @return: the starting and ending positions of every large group
 */
const largeGroupPositions = function (S) {
    const result = [];
    let index = 0;
    while(index<S.length){
        const start = index;
        const char = S[index++];
        while(index<S.length && S[index] === char){
            index++;
        }
        if(index-start>2){
            result.push([start,index-1]);
        }
    }
    return result;
}

