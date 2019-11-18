/**
 * @param nums1: an integer array
 * @param nums2: an integer array
 * @return: an integer array
 */
const intersection = function (nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    const result = [];
    let index1 = 0;
    let index2 = 0;
    while(index1<nums1.length && index2<nums2.length){
        if(nums1[index1]<nums2[index2]){
            index1++;
        }else if(nums1[index1]>nums2[index2]){
            index2++;
        }else{
            result.push(nums1[index1]);
            index1++;
            index2++;
        }
    }
    return result;
}
