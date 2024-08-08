let fn = (arr) => {
  let left = 0,
    ans = 0,
    right = arr.length - 1;

  while (left < right) {
    // do some logic here with left and right

    if (arr[left] + arr[right] < 0) {
      ans += right - left;
      left++;
    } else {
      right--;
    }
  }
};
