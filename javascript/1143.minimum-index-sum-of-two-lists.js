/**
 * @param list1: a list of strings
 * @param list2: a list of strings
 * @return: the common interest with the least list index sum
 */
const findRestaurant = function (list1, list2) {
    const map = {};
    for(let i=0;i<list1.length;i++){
        map[list1[i]] = i;
    }
    const result = [];
    let minIndex = list1.length+list2.length;
    for(let i=0;i<list2.length;i++){
        if(map[list2[i]] !== undefined){
            const sumIndex = i+map[list2[i]];
            if(sumIndex === minIndex){
                result.push(list2[i]);
            }else if(sumIndex<minIndex){
                minIndex = sumIndex;
                result.length = 0;
                result.push(list2[i]);
            }
        }
    }
    return result;
}

