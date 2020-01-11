/**
 * @param root: the given BST
 * @param target: the given target
 * @return: the value in the BST that is closest to the target
 */
const closestValue = function (root, target) {
    let result = root.val;
    let minDiff = Math.abs(target-root.val);
    while(root){
        if(root.val === target){
            return root.val;
        }
        const diff = Math.abs(target-root.val);
        if(diff<minDiff){
            result = root.val;
            minDiff = diff;
        }
        if(target>root.val){
            root = root.right;
        }else{
            root = root.left;
        }
    }
    return result;
}

