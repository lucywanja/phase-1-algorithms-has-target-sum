function hasTargetSum(array, target) {
  // Write your algorithm here
  const numSet = new Set(); // store the numbers encountered during iteration

  // iterate through the array
  for (const num of array) {
    // this loop itearates through each element num in the array
    // for each num ,it calculates its complement which is diff between target and num.The complement in this case is the value when added to num results in target
    const complement = target - num;
    if(numSet.has(complement)) { //check if the complement exists in the numset,if it does means there is another number in the array such that the sum  of that number with cureent num is equal to target.If this is tthe case return true.
      return true;
    }
    numSet.add(num);
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  
*/
//O(n)
/* 

  Rewrite the problem with your own words
*/
// -Make a function hasTargetSum that checks if the two numbers from the array
// -add up to some target.ie if i have an array [1,2,3,4] 
// -and target is 6.I should return true because 2 and 4 add up to 6
// -for each check if there is a number that adds to the target.

/*
  Add your pseudocode here
*/
  // hasTargetSum([1,2,3,4], 6)
  // seenNumbers = {
    // 1: true,
    // 2: true,
    // 3: true,

  // } 

  // create an object to keep the numbers seen
  // iterate throgh each number in the array
  // for the current num, identify a complement thata dds to the target (comp = target- num)
  // check if any key on our object is the complement
  // if so, return true
  // otherwise, add that number to the object

  // if i reach end of the array return false
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
