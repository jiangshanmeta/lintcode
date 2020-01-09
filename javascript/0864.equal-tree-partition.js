/**
 * @param root: a TreeNode
 * @return: return a boolean
 */
const checkEqualTree = function (root) {
    let sum = 0;
    function getSum(root,sumMap){
        let left = 0;
        let right = 0;
        if(root.left){
            left = getSum(root.left,sumMap);
            sumMap[left] = true;
        }
        if(root.right){
            right = getSum(root.right,sumMap);
            sumMap[right] = true;
        }

        sum += root.val;
        return left+right+root.val;
    }
    const sumMap = {};
    getSum(root,sumMap);
    const half = sum / 2;
    return !!sumMap[half]
}


