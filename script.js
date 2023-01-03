// Computes sum all sub-array and compare them accordingly
let givenData = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let totalElements = givenData.length;
document.write(
  "Sum of SubArray : " + maxSubArray(givenData, totalElements) + "<br>"
);
console.log(maxSubArray(givenData, totalElements));
function maxSubArray(data, len) {
  let maxSum = 0;
  let currentSum = 0;
  for (i = 0; i < len; i++) {
    //we add array element in current sum
    currentSum = currentSum + data[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    } else if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}
