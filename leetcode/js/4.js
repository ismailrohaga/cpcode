/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//TODO: optimize by YOURSELF
var findMedianSortedArrays = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    nums2.push(nums1[i]);
  }

  //stuckoverflow engineering
  nums2.sort(function (a, b) {
    return a - b;
  });

  let out = 0;
  if (nums2.length % 2 == 0) {
    const mid = nums2.length / 2;
    out = (nums2[mid - 1] + nums2[mid]) / 2;
  } else {
    out = nums2[Math.floor(nums2.length / 2)];
  }
  console.log(nums2);
  return out;
};

console.log(findMedianSortedArrays([3], [-2, -1]));
