/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
const permutations = nums => {
  let results = []
  if (nums.length === 1) return [nums]
  nums.forEach((num, i) => {

    let copy = nums.slice()
    // pulls out each num individually
    copy.splice(i, 1)
    //
    let remainingElements = permutations(copy)
    let firstNum = remainingElements.map(perm => [num, ...perm])
    results.push(...firstNum)
  });
  return results;
  // console.log(results)
}

console.log(permutations([1, 2, 3])) // [[1, 2, 3], [1, 3, 2],
// [2, 1, 3], [2, 3, 1],
// [3, 1, 2], [3, 2, 1]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
