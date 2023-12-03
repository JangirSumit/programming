//https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0;

  while (i > m && j > n) {
    if (nums1[i] > nums2[2]) {
      i++;
    } else {
      nums1.splice(i, 0, nums2[j]);
      i++;
      j++;
    }
  }
};
