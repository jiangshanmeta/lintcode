/**
 * @param nums: an array
 * @return: the maximum tree
 */
const constructMaximumBinaryTree = function (nums) {
    return buildTree(nums,0,nums.length-1);
}

function buildTree(nums,start,end){
    if(start>end){
        return null;
    }
    let rootVal = nums[start];
    let rootIndex = start;
    for(let i=start+1;i<end+1;i++){
        if(nums[i]>rootVal){
            rootVal = nums[i];
            rootIndex = i;
        }
    }
    const root = new TreeNode(rootVal);
    root.left = buildTree(nums,start,rootIndex-1);
    root.right = buildTree(nums,rootIndex+1,end);
    return root;
}