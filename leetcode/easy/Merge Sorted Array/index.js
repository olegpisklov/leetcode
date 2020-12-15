/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// i = 2
// j = 2
// [1,2,3,0,0,6]
// [2,5,6], 

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    
    while(j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[i + j + 1] = nums1[i];
            --i;
        } else {
            nums1[i + j + 1] = nums2[j];
            --j;
        }
    }
}
