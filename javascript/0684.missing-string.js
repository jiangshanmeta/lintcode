/**
 * @param str1: a given string
 * @param str2: another given string
 * @return: An array of missing string
 */
const missingString = function (str1, str2) {
    const list1 = str1.split(' ');
    const list2 = str2.split(' ');
    const map = {};
    for(let i=0;i<list2.length;i++){
        map[list2[i]] = true;
    }
    const result = [];
    for(let i=0;i<list1.length;i++){
        if(!map[list1[i]]){
            result.push(list1[i]);
        }
    }
    return result;
}

