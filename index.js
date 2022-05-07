function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j != i) {
        if (array[i] + array[j] === target) {
          return true;
        }
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  we traverse the array with O(N²) complexity so that we can sum together any pairs of numbers from the array.
  if the sum of the one pair,is equal to the target sum,we return true. otherwise, if not a single sum of pair is equal to the target sum,
then we return false.
when using O(N²) complexity we have to add a check that pairs are constructed by elements in different position of the array.
we cant have a pair of the same element in the array.
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
