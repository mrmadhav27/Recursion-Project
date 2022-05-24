/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
// const isSorted = (arr) => {
//   if (arr.length === 1) return true
//   if (arr[0] > arr[1]) return false
//   arr.shift()
//   return isSorted(arr)
// }

// const isSorted = (arr) => {
//   if (arr.length === 1) return true
//   if (arr.pop() > arr[arr.length - 1]) {
//     return isSorted(arr)
//   } else return false

// }

// const isSorted = (arr) => {
//   if (arr.length === 1) return true
//   if (arr.shift() < arr[0]) {
//     return isSorted(arr)
//   } else return false
// }

const isSorted = nums => {
  if (nums.length === 1) return true
  if (nums[0] > nums[1]) return false
  let newNum = nums.slice(1)
  return isSorted(newNum)
}

// console.log(isSorted([1, 2, 3, 4, 5])); // true
// console.log(isSorted([1, 2, 4, 3, 5])); // false
// console.log(isSorted([2, 4, 6, 7, 8])); // true
// console.log(isSorted([5, 4, 3, 2, 1])); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
