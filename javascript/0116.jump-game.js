/**
 * @param A: A list of integers
 * @return: A boolean
 */
const canJump = function (A) {
    // rightIndex 能到达的最后一个索引
    let rightIndex = 0;
    // leftIndex 要探寻的索引
    let leftIndex = 0;
    while(leftIndex<A.length && leftIndex<=rightIndex){
        rightIndex = Math.max(rightIndex,leftIndex+A[leftIndex]);
        leftIndex++;
    }
    return rightIndex>=A.length-1;
}

