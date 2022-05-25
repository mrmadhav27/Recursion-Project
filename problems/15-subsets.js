/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// const subsets = (arr) => {
//   if (!arr.length) return [[]];

//   //look at first ele in the arr
//   let firstEl = arr.shift();

//   // define all sets exclude
//   let setsWithoutEle = subsets(arr.slice());

//   //define all that includes
//   let setsWithEl = subsets(arr.slice()).map(subset => [firstEl, ...subset]);

//   // return the combination of both
//   return [...setsWithoutEle, ...setsWithEl];
// }

// const subsets = arr => {
//   let subArr = [];
//   createSubArr([], 0);

//   function createSubArr (ele, index) {
//     subArr.push(ele);
//     for (let i = index; i < arr.length; i++) {
//       createSubArr([...ele, arr[i]], i + 1)
//     }
//   }
//   return subArr;
// }

// not working
const subsets = (arr, newArr = [[]]) => {
  if (!arr.length) return newArr;
  for (let i = 0; i < arr.length; i++) {
    newArr.push([arr.shift()])
    return subsets(arr, newArr)
  }
}

// console.log(subsets([1])) // [[], [1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
