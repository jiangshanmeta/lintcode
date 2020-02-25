/**
 * @param str: the origin string
 * @return: the start and end of every twitch words
 */
const twitchWords = function (str) {
    let index = 0;
    const result = [];
    while(index<str.length){
        const start = index;
        const char = str[index++];
        while (index<str.length && str[index] === char){
            index++;
        }
        if(index-start>2){
            result.push([start,index-1]);
        }
    }
    return result;
}

