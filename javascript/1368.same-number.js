/**
 * @param nums: the arrays
 * @param k: the distance of the same number
 * @return: the ans of this question
 */
const sameNumber = function (nums, k) {
    const indexMap = {};
    for(let i=0;i<nums.length;i++){
        if(indexMap[nums[i]] !== undefined && (i-indexMap[nums[i]]<k) ){
            return "YES"
        }
        indexMap[nums[i]] = i;
    }
    return "NO"
}

console.log(sameNumber([1,2,3,1,5,9,3],4))