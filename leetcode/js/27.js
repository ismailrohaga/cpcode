/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // weird but ok
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      arr.push(nums[i]);
    }
  }
  return arr;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
