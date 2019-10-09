/**
 * @param root: The root of binary tree.
 * @return: True if this Binary tree is Balanced, or false.
 */
const isBalanced = function (root) {
    return helper(root)[1];
}

function helper(root){
    if(!root){
        return [0,true];
    }
    const [leftH,leftB] = helper(root.left);
    if(!leftB){
        return [0,false];
    }
    const [rightH,rightB] = helper(root.right);
    if(!rightB){
        return [0,false];
    }
    const delta = Math.abs(leftH-rightH);
    return [Math.max(leftH,rightH)+1,delta<2];
}
