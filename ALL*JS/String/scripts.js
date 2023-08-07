console.log(123)

//strings
//slice method
let str = 'Apple, Banana, Kiwi';
console.log(str.slice())
let res = str.slice(7, 13);
console.log(res);

//substring method
// here the 2nd value is the length of the string to be sliced

let res1 = str.substring(7, 13);
console.log(res1);

//substr method

let res2 = str.substr(7, 6);
console.log(res2);

//replace method
//the first value is the string to be replaced and the second value is the string to be replaced with and replaces only the first occurence of the string


let res3 = str.replace('Banana', 'Mango');
console.log(res3)

//replace all occurences of a string

let res4 = str.replaceAll('a', 'A');
console.log(res4)

//replace all occurences of a string using regular expression

let res5 = str.replace(/a/g, 'A');
console.log(res5)

//to uppercase

let res6 = str.toUpperCase();
console.log(res6)

//to lowercase

let res7 = str.toLowerCase();
console.log(res7)

//concat method

let res8 = str.concat(' ', 'Orange');
console.log(res8)

//trim method

let str1 = '     Apple, Banana, Kiwi     ';
let res9 = str1.trim();
console.log(res9)


//padStart method

let str2 = '5';
let res10 = str2.padStart(4, 0);
console.log(res10)

//padEnd method


let res11 = str2.padEnd(4, 0);
console.log(res11)

//split method

let res12 = str.split(',');
console.log(res12)

//split method with limit

let res13 = str.split(',', 2);
console.log(res13)

//split method with regular expression


let str3 = 'Apple, Banana, Kiwi, Mango, Orange';
let res14 = str3.split(/[, ]+/);
console.log(res14)

//split method with regular expression and limit

let res15 = str3.split(/[, ]+/, 3);
console.log(res15)

//charAt method

let res16 = str.charAt(0);
console.log(res16)

//charCodeAt method
//ASCII value of the first character
let res17 = str.charCodeAt(0);
console.log(res17)

//indexOf method
//returns the index of the first occurence of the string

let res18 = str.indexOf('Banana');
console.log(res18)

//lastIndexOf method
//returns the index of the last occurence of the string

let res19 = str.lastIndexOf('Banana');
console.log(res19)

//search method
//returns the index of the first occurence of the string

let res20 = str.search('Banana');
console.log(res20)

//includes method
//returns true if the string is present in the string

let res21 = str.includes('Banana');
console.log(res21)








