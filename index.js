function hasTargetSum(array, target) {
  // Create an empty object to store encountered numbers
  const numMap = {};

  // Iterate through the input array
  for (let num of array) {
      // Calculate the difference needed to reach the target
      const difference = target - num;
      
      // If the difference exists in numMap, a pair is found
      if (numMap[difference]) {
          return true;
      }
      
      // Store the current number in numMap
      numMap[num] = true;
  }

  // No pair found, return false
  return false;
}


/* 
  // Big O time complexity: O(n), where n is the number of elements in the input array.
// Space complexity: O(n), where n is the number of elements in the input array.
*/

/* 
  function hasTargetSum(arr, target):
    1. Initialize an empty object called `numMap`.
    2. Iterate through the array `arr`:
        a. Calculate `difference` as `target - arr[i]`.
        b. If `difference` exists in `numMap`, return true (there is a pair).
        c. Otherwise, add `arr[i]` as a key to `numMap`.
    3. If no pair is found during the iteration, return false.


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
