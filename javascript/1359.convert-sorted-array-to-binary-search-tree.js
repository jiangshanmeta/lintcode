/**
 * @param nums: the sorted array
 * @return: the root of the tree
 */
const convertSortedArraytoBinarySearchTree = function (nums) {
    return buildTree(nums,0,nums.length-1);
}

function buildTree(nums,start,end){
    if(start>end){
        return null;
    }

    const mid = (start+end) >> 1;
    const root = new TreeNode(nums[mid]);
    root.left = buildTree(nums,start,mid-1);
    root.right = buildTree(nums,mid+1,end);
    return root;
}