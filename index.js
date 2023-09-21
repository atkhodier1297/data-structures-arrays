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

const strings = ['a', 'b', 'c', 'd']
// 4 * 4 === 16 bytes of storage
// stored sequentially in ram

strings[2] // gives you that index O(1)

strings.push('e') // adds to the end O(1)

strings.pop() // removes at the end O(1)

strings.unshift('x') // adds at the beginning O(n)
// this iterates and changes the indices therefore being O(n)
// how long the iteration takes depends on size of the array

strings.splice(2, 0, 'splice') // adds in the middle O(n/2)
// remove the constants and simplify to O(n)

console.log(strings)
