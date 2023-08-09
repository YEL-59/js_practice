console.log(123)

//Array methods

//1. concat() - merge two or more arrays and returns a new array
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)
console.log(arr3)

//2. copyWithin() - copies part of an array to another location in the same array and returns it without modifying its length
const arr4 = [1,2,3,4,5,6,7,8,9]
console.log(arr4.copyWithin(0,3,6))

//3. entries() - returns a new array iterator object that contains the key/value pairs for each index in the array
const arr5 = [1,2,3,4,5,6,7,8,9]
const iterator = arr5.entries()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

//4. every() - tests whether all elements in the array pass the test implemented by the provided function
const arr6 = [1,2,3,4,5,6,7,8,9]
const isBelowThreshold = (currentValue) => currentValue < 10
console.log(arr6.every(isBelowThreshold))

//5. fill() - fills all the elements of an array from a start index to an end index with a static value
const arr7 = [1,2,3,4,5,6,7,8,9]
console.log(arr7.fill(0,3,6))

//6. filter() - creates a new array with all elements that pass the test implemented by the provided function
const arr8 = [1,2,3,4,5,6,7,8,9]
const filtered = arr8.filter((value) => value > 5)
console.log(filtered)

//7. find() - returns the value of the first element in the array that satisfies the provided testing function
const arr9 = [1,2,3,4,5,6,7,8,9]
const found = arr9.find((value) => value > 5)
console.log(found)

//8. findIndex() - returns the index of the first element in the array that satisfies the provided testing function
const arr10 = [1,2,3,4,5,6,7,8,9]
const foundIndex = arr10.findIndex((value) => value > 5)
console.log(foundIndex)

//9. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const arr11 = [1,2,3,4,5,6,7,8,9]
const arr12 = [1,2,3,4,5,6,7,8,9]
const arr13 = [1,2,3,4,5,6,7,8,9]
const arr14 = [1,2,3,4,5,6,7,8,9]
const arr15 = [1,2,3,4,5,6,7,8,9]
const arr16 = [1,2,3,4,5,6,7,8,9]
const arr17 = [1,2,3,4,5,6,7,8,9]
const arr18 = [1,2,3,4,5,6,7,8,9]
const arr19 = [1,2,3,4,5,6,7,8,9]
const arr20 = [1,2,3,4,5,6,7,8,9]
const arr21 = [1,2,3,4,5,6,7,8,9]

console.log(arr11.flat())
console.log(arr12.flat(2))
console.log(arr13.flat(Infinity))

//10. flatMap() - returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
const arr22 = [1,2,3,4,5,6,7,8,9]
const arr23 = [1,2,3,4,5,6,7,8,9]
const arr24 = [1,2,3,4,5,6,7,8,9]
const arr25 = [1,2,3,4,5,6,7,8,9]
const arr26 = [1,2,3,4,5,6,7,8,9]
const arr27 = [1,2,3,4,5,6,7,8,9]
const arr28 = [1,2,3,4,5,6,7,8,9]
const arr29 = [1,2,3,4,5,6,7,8,9]
const arr30 = [1,2,3,4,5,6,7,8,9]
const arr31 = [1,2,3,4,5,6,7,8,9]
const arr32 = [1,2,3,4,5,6,7,8,9]
const arr33 = [1,2,3,4,5,6,7,8,9]
const arr34 = [1,2,3,4,5,6,7,8,9]
const arr35 = [1,2,3,4,5,6,7,8,9]
const arr36 = [1,2,3,4,5,6,7,8,9]
const arr37 = [1,2,3,4,5,6,7,8,9]
const arr38 = [1,2,3,4,5,6,7,8,9]
const arr39 = [1,2,3,4,5,6,7,8,9]
const arr40 = [1,2,3,4,5,6,7,8,9]
const arr41 = [1,2,3,4,5,6,7,8,9]
const arr42 = [1,2,3,4,5,6,7,8,9]
const arr43 = [1,2,3,4,5,6,7,8,9]
const arr44 = [1,2,3,4,5,6,7,8,9]
const arr45 = [1,2,3,4,5,6,7,8,9]
const arr46 = [1,2,3,4,5,6,7,8,9]
const arr47 = [1,2,3,4,5,6,7,8,9]

console.log(arr22.flatMap((value) => [value * 2]))
console.log(arr23.flatMap((value) => [[value * 2]]))
console.log(arr24.flatMap((value) => [[[value * 2]]]))
console.log(arr25.flatMap((value) => [[[[value * 2]]]]))
console.log(arr26.flatMap((value) => [[[[[value * 2]]]]]))
console.log(arr27.flatMap((value) => [[[[[[value * 2]]]]]]))
console.log(arr28.flatMap((value) => [[[[[[[value * 2]]]]]]]))
console.log(arr29.flatMap((value) => [[[[[[[[value * 2]]]]]]]]))
console.log(arr30.flatMap((value) => [[[[[[[[[value * 2]]]]]]]]]))
console.log(arr31.flatMap((value) => [[[[[[[[[[value * 2]]]]]]]]]]))
console.log(arr32.flatMap((value) => [[[[[[[[[[[value * 2]]]]]]]]]]]))

//11. forEach() - executes a provided function once for each array element
const arr48 = [1,2,3,4,5,6,7,8,9]
arr48.forEach((value) => console.log(value))

//12. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
const arr49 = [1,2,3,4,5,6,7,8,9]
console.log(arr49.includes(5))

//13. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
const arr50 = [1,2,3,4,5,6,7,8,9]
console.log(arr50.indexOf(5))

//14. join() - creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
const arr51 = [1,2,3,4,5,6,7,8,9]
console.log(arr51.join())


//15. keys() - returns a new Array Iterator object that contains the keys for each index in the array
const arr52 = [1,2,3,4,5,6,7,8,9]
const iterator2 = arr52.keys()
console.log(iterator2.next().value)
console.log(iterator2.next().value)
console.log(iterator2.next().value)

//16. lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present
const arr53 = [1,2,3,4,5,6,7,8,9]
console.log(arr53.lastIndexOf(5))

//17. map() - creates a new array populated with the results of calling a provided function on every element in the calling array
const arr54 = [1,2,3,4,5,6,7,8,9]
const mapped = arr54.map((value) => value * 2)
console.log(mapped)

//18. pop() - removes the last element from an array and returns that element
const arr55 = [1,2,3,4,5,6,7,8,9]
console.log(arr55.pop())

//19. push() - adds one or more elements to the end of an array and returns the new length of the array
const arr56 = [1,2,3,4,5,6,7,8,9]
console.log(arr56.push(10))

//20. reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
const arr57 = [1,2,3,4,5,6,7,8,9]
const reducer = (accumulator, currentValue) => accumulator + currentValue
console.log(arr57.reduce(reducer))

//21. reduceRight() - applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value
const arr58 = [1,2,3,4,5,6,7,8,9]
const reducer2 = (accumulator, currentValue) => accumulator + currentValue
console.log(arr58.reduceRight(reducer2))

//22. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first
const arr59 = [1,2,3,4,5,6,7,8,9]
console.log(arr59.reverse())

//23. shift() - removes the first element from an array and returns that removed element
const arr60 = [1,2,3,4,5,6,7,8,9]
console.log(arr60.shift())

//24. slice() - returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
const arr61 = [1,2,3,4,5,6,7,8,9]
console.log(arr61.slice(3,6))

//25. some() - tests whether at least one element in the array passes the test implemented by the provided function
const arr62 = [1,2,3,4,5,6,7,8,9]
const even = (element) => element % 2 === 0
console.log(arr62.some(even))

//26. sort() - sorts the elements of an array in place and returns the sorted array
const arr63 = [1,2,3,4,5,6,7,8,9]
console.log(arr63.sort())

//27. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const arr64 = [1,2,3,4,5,6,7,8,9]
console.log(arr64.splice(3,6))

//28. toLocaleString() - returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)
const arr65 = [1,2,3,4,5,6,7,8,9]
console.log(arr65.toLocaleString())

//29. toString() - returns a string representing the specified array and its elements
const arr66 = [1,2,3,4,5,6,7,8,9]
console.log(arr66.toString())

//30. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
const arr67 = [1,2,3,4,5,6,7,8,9]
console.log(arr67.unshift(0))

//31. values() - returns a new Array Iterator object that contains the values for each index in the array
const arr68 = [1,2,3,4,5,6,7,8,9]
const iterator3 = arr68.values()
console.log(iterator3.next().value)
console.log(iterator3.next().value)
console.log(iterator3.next().value)


//32. from() - creates a new, shallow-copied Array instance from an array-like or iterable object
const arr69 = [1,2,3,4,5,6,7,8,9]
console.log(Array.from(arr69))

//33. isArray() - determines whether the passed value is an Array
const arr70 = [1,2,3,4,5,6,7,8,9]
console.log(Array.isArray(arr70))

//34. of() - creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments
console.log(Array.of(1,2,3,4,5,6,7,8,9))

//35. copyWithin() - copies part of an array to another location in the same array and returns it without modifying its length
const arr71 = [1,2,3,4,5,6,7,8,9]
console.log(arr71.copyWithin(0,3,6))

//36. entries() - returns a new array iterator object that contains the key/value pairs for each index in the array
const arr72 = [1,2,3,4,5,6,7,8,9]
const iterator4 = arr72.entries()
console.log(iterator4.next().value)
console.log(iterator4.next().value)
console.log(iterator4.next().value)

//37. every() - tests whether all elements in the array pass the test implemented by the provided function
const arr73 = [1,2,3,4,5,6,7,8,9]
const isBelowThreshold2 = (currentValue) => currentValue < 10
console.log(arr73.every(isBelowThreshold2))




//vowel count in a string
const st = 'hello world'

const str = st.split('')
const vowels = ['a','e','i','o','u']
let count = 0
for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
        count++
    }
}
console.log(count)

//find duplicate in an array
const arr74 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
const arr75 = []
for(let i = 0; i < arr74.length; i++){
    if(arr75.includes(arr74[i])){
        console.log(arr74[i])
    }else{
        arr75.push(arr74[i])
    }
}
//find duplicate in an array using filter
const arr76 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
const arr77 = arr76.filter((value, index) => arr76.indexOf(value) !== index)
console.log(arr77)

//find duplicate in an array using reduce
const arr78 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
const arr79 = arr78.reduce((acc, value) => {
    if(acc.indexOf(value) === -1){
        acc.push(value)
    }
    return acc
}
,[])
console.log(arr79)

//find duplicate in an array using map
const arr80 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
const arr81 = []
arr80.map((value) => {
    if(arr81.includes(value)){
        console.log(value)
    }else{
        arr81.push(value)
    }
}
)
console.log(arr81)

















