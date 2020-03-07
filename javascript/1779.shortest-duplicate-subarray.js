/**
 * @param arr: The array you should find shortest subarray length which has duplicate elements.
 * @return: Return the shortest subarray length which has duplicate elements.
 */
const getLength = function (arr) {
    if(arr.length === 0){
        return -1;
    }
    
    const indexMap = {};
    let result = arr.length+1;
    let startIndex = 0;
    indexMap[arr[0]] = 0;
    for(let i=1;i<arr.length;i++){
        if(indexMap[arr[i]] >= startIndex){
            result = Math.min(result,i-indexMap[arr[i]]+1);
            startIndex = indexMap[arr[i]]+1;
        }
        indexMap[arr[i]] = i;
    }
    
    return result === arr.length+1?-1:result;
}