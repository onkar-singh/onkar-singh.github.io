const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // remove last
fruits; // ["Banana", "Orange", "Apple"]

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.push("Kiwi"); // add in last
fruits1; // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2[fruits2.length] = "Kiwi"; // // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

delete fruits[0];

concat()	Joins arrays and returns an array with the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
fill()	Fill the elements in an array with a static value
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
length	Sets or returns the number of elements in an array
pop()	Removes the last element of an array, and returns that element
prototype	Allows you to add properties and methods to an Array object
push()	Adds new elements to the end of an array, and returns the new length
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
sort()	Sorts the elements of an array
splice()	Adds/Removes elements from an array
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array