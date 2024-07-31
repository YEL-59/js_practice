//JavaScript Program to Check for Palindrome Number
//Approch 1:String Reversal

function checkPalindrom(num) {
  let primarystr = num.toString();
  let reverse = primarystr.split("").reverse().join("");
  return primarystr === reverse;
}
console.log(checkPalindrom(121));

//Find the largest three distinct elements in an array

function findLargeThree(arr, n) {
  let  t = f = s = Number();
  if (n < 3) {
    console.log("n should be larger then 3");
    return;
  }
 

  for (let i = 0; i < n; i++) {
    if (arr[i] > f) {
      t = s;
      s = f;
      f = arr[i];
    } else if (arr[i] > s) {
      t = s;
      s = arr[i];
    } else if (arr[i] > t) {
      t = arr[i];
    }
  }
  console.log(t,s,f)
}
let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length; 

console.log(findLargeThree(arr,n))
