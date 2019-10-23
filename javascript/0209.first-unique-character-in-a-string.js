/**
 * @param str: str: the given string
 * @return: char: the first unique character in a given string
 */
const firstUniqChar = function (str) {
    const chars = [];
    const map = {};
    for(let i=0;i<str.length;i++){
        if(map[str[i]] === undefined){
            chars.push(str[i]);
            map[str[i]] = 1;
        }else{
            map[str[i]] += 1;
        }
    }
    for(let i=0;i<chars.length;i++){
        if(map[chars[i]] === 1){
            return chars[i];
        }
    }
    
}

