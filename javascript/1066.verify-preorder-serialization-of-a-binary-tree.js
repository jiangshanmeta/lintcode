/**
 * @param preorder: a string
 * @return: return a bool
 */
const isValidSerialization = function (preorder) {
    const list = preorder.split(',');
    // diff = outdegree-indegree
    let diff = 1;
    for(let i=0;i<list.length;i++){
        // 遇到一个节点 indegree++ 所以diff--
        diff--;
        if(diff<0){
            return false;
        }
        // 非空节点，增加两个outdegree
        if(list[i] !== '#'){
            diff += 2;
        }
        
    }

    return diff === 0;
}
