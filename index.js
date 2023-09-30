// Lookup O(1) CT
// Push O(1) CT
// Insert O(n) LT
// Delete O(n) LT

// Simplest most widely used data structure
// Least amount of rules
// Stored in contiguous memory (In Order)
// Therefore having the smallest footprint
// Best to store data and iterate over it

//EXAMPLE

const strings = ["a", "b", "c", "d"];
// 4 * 4 === 16 bytes of storage
// stored sequentially in ram

strings[2]; // gives you that index O(1)

strings.push("e"); // adds to the end O(1)

strings.pop(); // removes at the end O(1)

strings.unshift("x"); // adds at the beginning O(n)
// this iterates and changes the indices therefore being O(n)
// how long the iteration takes depends on size of the array

strings.splice(2, 0, "splice"); // adds in the middle O(n/2)
// remove the constants and simplify to O(n)

//console.log(strings)

// There are two types of Arrays...Static and Dynamic

// Static arrays need to be copied to a new place in memory to add more elements
// Dynamic arrays expand as you add more elements
// Most of the time in JS you are only working with dynamic arrays

// Deeper understanding of how arrays work in JS
// How to build an array (never on interviews)
// Arrays in JS are objects with integer based keys known as indices

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    // last item in the data
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    // we have to delete the item then shift the index of all other data
    // create a function that does this
    // good coding practices to have functions do one thing well
    // Single Responsibility Principal
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // O(n)
      this.data[i] = this.data[i + 1];
      // shifting items to the left by 1
    }
    // since we stop when i < the length we did not touch the last item
    // if you run delete now you will still have the last item
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
// creates a copy

// console.log(newArray.get(0))
// undefined nothing in the object

// newArray.push("hi");
// newArray.push("you");
// newArray.push("!");

// newArray.pop();

// newArray.delete(1);

// console.log(newArray);

// In interviews treat string questions as arrays
// Strings are just an array of characters0 ..

// Reverse a string
// 'Hi my name is Adam' should be
// 'madA si eman ym iH'

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "wrong input";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    // decrementing from the end of the string
    backwards.push(str[i]);
  }
  // console.log(backwards)

  // return backwards.toString()
  return backwards.join("");
}

reverse("Hi my name is Adam");

// JS simple method

function reverse2(str) {
  return str.split("").reverse().join("");
}

simpleAnswer = reverse2("Hi my name is Adam");

// console.log(simpleAnswer)

// JS one liner with

const reverse3 = (str) => str.split("").reverse().join("");

// don't even need the split method with spread operator

const reverse4 = (str) => [...str].reverse().join("");

oneLiner = reverse4("Hi my name is Adam");

// console.log(oneLiner)

// Merge Array Challenge

//Brute Force

function mergeArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  // Check inputs
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array2;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]))

// Simpler solution

function mergeArrays(arr1, arr2) {
  const mergedArray = [...arr1]; // Create a copy of arr1
  for (const item of arr2) {
    if (!mergedArray.includes(item)) {
      // Check if the item is not already in the merged array
      mergedArray.push(item); // Add the item to the merged array
    }
  }
  return mergedArray;
}

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const mergedResult = mergeArrays(array1, array2);
console.log(mergedResult); // Output: [1, 2, 3, 4, 5]


// Two Sum

function twoSum(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }

    numIndices[currentNum] = i;
  }

  return null; // Return null if no solution is found
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target); // Returns [0, 1] because nums[0] + nums[1] == 9

// Maximum Subarray

function maxSubarray(nums) {
  let maxSum = nums[0]; // Initialize the maximum sum with the first element of the array
  let currentSum = nums[0]; // Initialize the current sum with the first element

  for (let i = 1; i < nums.length; i++) {
    // Calculate the maximum between the current number and the current number + currentSum
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum if the currentSum becomes greater
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubarray(nums); // Returns 6 (the maximum subarray is [4, -1, 2, 1])

