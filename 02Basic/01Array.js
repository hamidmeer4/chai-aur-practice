// Push :  instances adds the specified elements to the end of an array and returns the new length of the array.

// const arr = ['hamid','meer','khan']
// const arr2 = arr.push('hahha')
// console.log(arr);


// Pop : instances removes the last element from an array and returns that element. This method changes the length of the array.


// const a = ['hamid','meer','khan']
// a.pop()
// console.log(a)


// slice : instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// const a = [1,2,3,4,2,4,3,2,6,4,6]
// console.log(a.slice(2,5))
 
// splice : The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().



// const month = ['jan','march','april','june']
// // month.splice(1,0,'feb')
// month.splice(4,0,'july')

// console.log(month)

// join  : instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.


// const joining = ['Hamid','Meer','Khan']
// console.log(typeof joining.join('-')) // why is string here 

// console.log(typeof joining)

// const a = [1,3,4,6,7]
// const b = [44,3,3,4,4]
// const c = a.concat(b)
// console.log(c)

// spread operator 

// const a = [1,3,4,6,7]
// const b = [44,3,3,4,4]
// console.log(...a,...b)


// Array Of 
// console.log(Array.of('hamid',23,'meer','haha'));


// isArray 

// const a = ['hamid',23,'meer','khan']

// console.log(Array.isArray(a))

console.log(Array.isArray(new Array(5)));

console.log(Array.isArray([]));

console.log(Array.isArray('[]'));



