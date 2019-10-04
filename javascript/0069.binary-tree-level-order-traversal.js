/**
 * @param root: A Tree
 * @return: Level order a list of lists of integer
 */
const levelOrder = function (root) {
    const result = [];
    root && leverOrderTreversal([root],result);
    return result;
}

function leverOrderTreversal(lastLevel,result){
    const lastLevelVals = [];
    const nextLevel = [];
    for(let i=0;i<lastLevel.length;i++){
        lastLevelVals.push(lastLevel[i].val);
        lastLevel[i].left && nextLevel.push(lastLevel[i].left);
        lastLevel[i].right && nextLevel.push(lastLevel[i].right);
    }
    result.push(lastLevelVals);
    nextLevel.length && leverOrderTreversal(nextLevel,result);
}

