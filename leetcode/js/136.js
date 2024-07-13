/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const mapped = map.get(element);
    if (mapped >= 1) {
      map.set(element, mapped + 1);
    } else {
      map.set(element, 1);
    }
  }

  let singleNum;
  map.forEach((value, key) => {
    if (value === 1) {
      singleNum = key;
    }
  });

  return singleNum;
};

console.log(singleNumber([2, 2, 1]));
