/**
 * @param s: a string
 * @return: a root of this tree
 */
const str2tree = function (s) {
    s = `(${s})`;
    let index = 0;
    function buildTree(){
        if(index === s.length || s[index] === ')'){
            return null;
        }
        index++;
        if(s[index] === ')'){
            index++;
            return null;
        }
        
        let flag = 1;
        if(s[index] === '-'){
            flag = -1;
            index++;
        }
        let val = 0;
        while(index<s.length && s[index] !== '(' && s[index] !== ')'){
            val = val*10+(+s[index++]);
        }
        const root = new TreeNode(val*flag);
        root.left = buildTree();
        root.right = buildTree();
        index++;
        return root;
    }
    return buildTree();
}
