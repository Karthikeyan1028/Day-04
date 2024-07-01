//2a//finding the odd number in array using arrow function
var temp = [];
var odd=(arr)=>{
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


//2b//converting all the strings to title caps in a string array using arrow function
var sentenceCase = (str)=>{
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


//2c//written a program to find the sum of numbers in an array using anonymous function
var sumofarray=(arr)=>{
    var  initialvalue = 0;
    var sum = arr.reduce(
      (accumulator, currentvalue) => accumulator + currentvalue,
      initialvalue);
      return sum;
    }
    var arr = [4, 5, 6, 10];
    console.log("The Sum of the array is:"+sumofarray(arr));
// output is// The Sum of the array is:25


//2d//written a program to return the prime numbers in a array using anonymous function
var a=[];
var prime=(arr)=>{
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


//2e// written a program to find the palindromes present in an array using anonymous function
var a=[];
var palindromecheck= (arr)=> {
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