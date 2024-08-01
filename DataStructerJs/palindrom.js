//JavaScript Program to Check for Palindrome Number
//Approch 1:String Reversal

function checkPalindrom(num) {
  let primarystr = num.toString();
  let reverse = primarystr.split("").reverse().join("");
  return primarystr === reverse;
}
console.log(checkPalindrom(121));

//Find the largest three distinct elements in an array

// function findLargeThree(arr, n) {
//   let  t = f = s = Number();
//   if (n < 3) {
//     console.log("n should be larger then 3");
//     return;
//   }

//   for (let i = 0; i < n; i++) {
//     if (arr[i] > f) {
//       t = s;
//       s = f;
//       f = arr[i];
//     } else if (arr[i] > s) {
//       t = s;
//       s = arr[i];
//     } else if (arr[i] > t) {
//       t = arr[i];
//     }
//   }
//   console.log(t,s,f)
// }
// let arr = [12, 13, 1, 10, 34, 1];
// let n = arr.length;

// console.log(findLargeThree(arr,n))

//Finding 2nd largest in array

// function print2largest(arr, arr_size) {
//   let i;
//   let largest = second = Number();

//   if (arr_size < 2) {
//     document.write(" Invalid Input ");
//     return;
//   }

//   // finding the largest element
//   for (i = 0; i < arr_size; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   // Now find the second largest element
//   for (i = 0; i < arr_size; i++) {
//     if (arr[i] > second && arr[i] < largest) {
//       second = arr[i];
//     }
//   }

//   if (second == -2454635434) {
//    console.log("There is no second largest element<br>");
//   } else {
//     console.log("The second largest element is " + second);
//     return;
//   }
// }

// // Driver program to test above function

// let arr = [12, 35, 1, 10, 34, 1];
// let n = arr.length;
// print2largest(arr, n);

// while (zeroCount > 0) {
//   result.push(0);
//   zeroCount--;
// }

//Move all zeroes to end of array

// function moveAllZeroToEnd(arr, n) {
//   let result = [];
//   let zeroCount = 0;

//   for (let i = 0; i < n; i++) {
//     if (arr[i] === 0) {
//       zeroCount++;
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   for(let i =0; i< zeroCount;i++){
//     result.push( 0)
//   }
//   return result
// }

// console.log(moveAllZeroToEnd([0, 1, 2, 3, 0], 5));

//buildin method

// function moveAllZeroToEnd(arr, n) {
//   let result = arr.filter((num)=>num ===0)
//   let zeroCount = arr.filter((num) => num !== 0);
//   return result.concat(zeroCount)

// }

// console.log(moveAllZeroToEnd([0, 1, 2, 3, 0], 5));



