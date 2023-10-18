//문자열 곱하기

const my_string = "물!";
const k = 5;
const arr = [];
let answer = '';

for(let i = 0; i < k; i++){
    arr.push(my_string);
}
console.log(arr.join(''));

console.log(my_string.repeat(k));

for(let i = 0; i < k; i++){
    answer += my_string;
}
console.log(answer);