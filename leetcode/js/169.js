/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const lookup = map.get(nums[i]);
    if (lookup > 0) {
      map.set(nums[i], lookup + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let pair = [...map.entries()].reduce((acc, entry) =>
    entry[1] > acc[1] ? entry : acc,
  );
  return pair[0];
};

console.log(majorityElement([3, 2, 3]));
