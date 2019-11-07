/**
 * @param a: the root of binary tree a.
 * @param b: the root of binary tree b.
 * @return: true if they are identical, or false.
 */
const isIdentical = function (a, b) {
    if(a && b){
        return a.val === b.val && isIdentical(a.left,b.left) && isIdentical(a.right,b.right);
    }
    if(!a && !b){
        return true;
    }
    return false;
}
