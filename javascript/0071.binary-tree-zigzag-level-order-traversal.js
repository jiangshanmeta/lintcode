/**
 * @param root: A Tree
 * @return: A list of lists of integer include the zigzag level order traversal of its nodes' values.
 */
const zigzagLevelOrder = function (root) {
    const result = [];
    root && zigzagLevelOrderTraversal([root],result,false);
    return result;
}

function zigzagLevelOrderTraversal(lastLevel,result,reverse){
    const lastLevelVals = [];
    const nextLevel = [];
    for(let i=0;i<lastLevel.length;i++){
        const node = lastLevel[i];
        lastLevelVals.push(node.val);
        node.left && nextLevel.push(node.left);
        node.right && nextLevel.push(node.right);
    }
    reverse && lastLevelVals.reverse();
    result.push(lastLevelVals);
    nextLevel.length && zigzagLevelOrderTraversal(nextLevel,result,!reverse);
}