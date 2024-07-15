/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let prev = 0;
  let largestAlt = prev;
  for (let i = 0; i < gain.length; i++) {
    const curr = prev + gain[i];
    if (curr > largestAlt) {
      largestAlt = curr;
    }
    prev = curr;
  }
  return largestAlt;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
