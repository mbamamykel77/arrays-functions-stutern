/*What are the differences between mutating array methods and non-mutation array methods in JavaScript. 
List 5 array methods that fall under each of them.


ANSWER:

Mutating array methods are methods that modify the original array they are called on. They directly change the elements in the array and return a reference to the same array.

Here are 5 examples of mutating array methods:

push() - adds one or more elements to the end of an array and returns the new length of the array.
pop() - removes the last element from an array and returns that element.
splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
sort() - sorts the elements of an array in place and returns the sorted array.
reverse() - reverses the order of the elements in an array in place and returns the reversed array.
On the other hand, non-mutating array methods are methods that do not modify the original array they are called on. 
Instead, they return a new array or a new value based on the original array without modifying it.

Here are 5 examples of non-mutating array methods:

slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
concat() - returns a new array that combines two or more arrays.
filter() - creates a new array with all elements that pass the test implemented by the provided function.
map() - creates a new array populated with the results of calling a provided function on every element in the calling array.
reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
*/



//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question 2
// Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
/*Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’
*/

// Add ‘Kotlin’ to the end of the array
const language = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language.push('Kotlin');
console.log(language)
// Answer: 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

// Add Java after ruby
language.splice(3,0, 'Java');
console.log(language)
// Answer: [ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// Remove the first item in the array
language.splice(0, 1)
console.log(language)
//Answer: [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

// Add ’Scala’ and ‘Swift’ to the beginning of the array
language.splice(0, 0, 'Scala' , 'Swift')
console.log(language)
/* [
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'PHP',
  'Python',     'Kotlin']
*/

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
language.splice(5, 1, 'GO', 'Rust')
console.log(language)
// Answer:
/*[
  'Scala',      'Swift',
  'JavaScript', 'Ruby',
  'Java',       'GO',
  'Rust',       'Python',
  'Kotlin'
]*/

//--------------------------------------------------------------------------------------------------------------------------
// Question 3:
// What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
}
console.log(changeFruit (fruit))
// Answer: [ 'apple', 'mango', 'orange' ]


// -----------------------------------------------------------------------------------------------------------------------
// Question 4
/*Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10 */

function max(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  }
console.log(max[4, 5, 10, -2]);  
