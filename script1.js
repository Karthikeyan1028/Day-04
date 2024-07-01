//1a//finding the odd number in array using anonymous function
var temp = [];
var odd=function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2 != 0){
      temp.push(arr[i]);
    }
  }
  return temp;
}
var arr=[14,15,16,17];
console.log(odd(arr));
// output is// [15,17]
//1a/finding the odd number in array using IIFE function
var temp = [];
var odd=(function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2 != 0){
      temp.push(arr[i]);
    }
  }
  return temp;
})
([14,15,16,17]);
console.log(odd);
// output //is [15,17]

//1b//converting all the strings to title caps in a string array using anonymous function
var sentenceCase =function (str) {
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
  
   return str.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  var arr = ['karthi','keyan','javascript','exercises'];
  var str = arr.join(" ");
  console.log(sentenceCase(str));
// output is// Karthi Keyan Javascript Exercises
  
  
// 1b//converting all the strings to title caps in a string array using IIFE function
  var sentenceCase =(function (str) {
    str= str.join(" ")
    if ((str===null) || (str===''))
         return false;
    else
     str = str.toString();
  
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()  + txt.substr(1).toLowerCase();});
  })
  (['karthi','Keyan','javascript','exercises']);
  console.log(sentenceCase);
// output is// Karthi Keyan Javascript Exercises


//1c//written a program to find the sum of numbers in an array using anonymous function
  var sumofarray=function(arr){
    var  initialvalue = 0;
    var sum = arr.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      initialvalue);
      return sum;
    }
    var arr = [4, 5, 6, 10];
    console.log("The Sum of the array is:"+sumofarray(arr));
// output is// The Sum of the array is:25

//1c//written a program to find the sum of numbers in an array using IIFE function 
var sumofarray= (function(arr){
    var  initialvalue = 0;
    var sum = arr.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      initialvalue);
      return sum;
    })
    ([4, 5, 6, 10]);
    console.log("The Sum of the array is:"+sumofarray);
// output is// The Sum of the array is:25

//1d//written a program to return the prime numbers in a array using anonymous function
var a=[];
var prime=function(arr){
for(var num of arr){
  for(var i=2;i<=num;i++){
    if(num%i==0){
      break;
    }
  }
  if(num==i){
    a.push(num);
}
}
return a;
}
var arr=[11,4,5,9,3];
console.log(prime(arr));
// output is// [11,5,3]

//1d//written a program to return the prime numbers in a array using IIFE function
var a=[];
var prime=(function(arr){
for(var num of arr){
  for(var i=2;i<=num;i++){
    if(num%i==0){
      break;
    }
  }
  if(num==i){
    a.push(num);
}
}
return a;
})
([11,4,5,9,3]);
console.log(prime);
// output is// [11,5,3]

//1e// written a program to find the palindromes present in an array using anonymous function
var a=[];
var palindromecheck= function(arr) {
  for(var str of arr){
    var numstr = str.toString();
    var result = numstr.split('').reverse().join('');
    if(numstr === result){
      a.push(str);
    }
  }
  return a;
}
var arr = ["madam","gopika","1234321"];
console.log(palindromecheck(arr));
// output is //[ 'madam', '1234321' ]

//1e// written a program to find the palindromes present in an array using IIFE function
var a=[];
var palindromecheck= (function(arr) {
  for(var str of arr){
    var numstr = str.toString();
    var result = numstr.split('').reverse().join('');
    if(numstr === result){
      a.push(str);
    }
  }
  return a;
})
(["madam","gopika","1234321"]);
console.log(palindromecheck);
// output is //[ 'madam', '1234321' ]


//1f//written program is to return the median of two sorted arrays of same size anonymous function
var  getmedian= function(ar1, ar2, n)
{
return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
}
var ar1 = [ 1,2,3,4,5,6 ];
var ar2 = [ 8,9,10,11,12,13];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
console.log("The Median is "+ getmedian(ar1, ar2, n1));
// output is // The Median is 7


//1f//written program is to return the median of two sorted arrays of same size using IIFE function
var  getmedian= (function(ar1, ar2, n)
{
var n=ar1.length=ar2.length;
return parseInt((ar1[n - 1] + ar2[0]) / 2);
})
([1,2,3,4,5,6 ],[8,9,10,11,12,13]);
console.log(" The Median is "+ getmedian);
// output is // The Median is 7


//1g//written a program to remove duplicates of an array using anonymous function
var removeduplicates=function (arr) {
  return arr.filter((item,index) => arr.indexOf(item) === index);
}
var arr = [1,3,4,5,4,6,3,2];
console.log(removeduplicates(arr));
// output is // [ 1, 3, 4, 5, 6, 2 ]


//1g//written a program to remove duplicates of an array using IIFE function
var removeduplicates=(function (arr) {
  return arr.filter((item,index) => arr.indexOf(item) === index);
})
([1,3,4,5,4,6,3,2]);
console.log(removeduplicates);
// output is // [ 1, 3, 4, 5, 6, 2 ]


//1h//written a program to rotate the array by K times using anonymous function
  var rotatearray=function (arr, k) {
    var n = arr.length;
    if (k === 0) {
        return;
    }
    var temp = arr[n - 1];
    for (var i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    rotatearray(arr, k - 1);
}
var arr = [1,2,3,4,5];
var k = 2;
rotatearray(arr,k)
console.log(arr);
//output is [4,5,1,2,3]







