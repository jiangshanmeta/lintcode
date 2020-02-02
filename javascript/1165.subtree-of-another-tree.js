/**
 * @param s: the s' root
 * @param t: the t' root
 * @return: whether tree t has exactly the same structure and node values with a subtree of s
 */
const isSubtree = function (s, t) {
    if(!t){
        return true;
    }

    return helper(s,t);
}

function helper(s,t){
    if(!s){
        return false;
    }
    if(s.val === t.val && isSame(s,t)){
        return true;
    }
    return helper(s.left,t) || helper(s.right,t);
}

function isSame(root1,root2){
    if(root1 && root2){
        return root1.val === root2.val && isSame(root1.left,root2.left) && isSame(root1.right,root2.right);
    }else if(!root1 && !root2){
        return true;
    }
    return false;
}