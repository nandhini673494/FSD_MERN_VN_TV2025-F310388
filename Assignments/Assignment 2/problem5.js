let arr=[1,2,3,4,5];
let sum=arr.reduce((a,b)=> a+b, 0);
let largest=Math.max(...arr);
console.log("Sum:",sum);
console.log("Largest:", largest);