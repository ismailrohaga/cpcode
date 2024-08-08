let fn = (arr1, arr2) => {
  let i = 0,
    j = 0,
    ans = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans += arr1[i];
      i++;
    } else {
      ans += arr2[j];
      j++;
    }
  }

  while (i < arr1.length) {
    ans += arr1[i];
    i++;
  }

  while (j < arr2.length) {
    ans += arr2[j];
    j++;
  }

  return ans;
};
