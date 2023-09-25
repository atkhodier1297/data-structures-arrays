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

newArray.push("hi");
newArray.push("you");
newArray.push("!");

// newArray.pop();

newArray.delete(1);

console.log(newArray);
