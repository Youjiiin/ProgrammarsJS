const str1 = "aaaaa";
const str2 = "bbbbb";

//1
const arr1 = [...str1];
const arr2 = [...str2];
const arr = [];

for(let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i] + arr2[i]);
}

console.log(arr.join(''));

//2
let result = "";

for ( i = 0; i < str1.length; i++){
    result += str1[i] + str2[i];
}

console.log(result);