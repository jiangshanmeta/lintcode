/**
 * @param root: the root
 * @return: the second minimum value in the set made of all the nodes' value in the whole tree
 */
const findSecondMinimumValue = function (root) {
    return findGreater(root,root.val)
}

function findGreater(root,min){
    if(!root){
        return -1;
    }
    if(root.val>min){
        return root.val;
    }
    const left = findGreater(root.left,min);
    const right = findGreater(root.right,min);
    if(left>-1 && right>-1){
        return Math.min(left,right);
    }else if(left>-1){
        return left;
    }else if(right>-1){
        return right;
    }
    return -1;
}

