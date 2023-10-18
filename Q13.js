//더 크게 합치기
const a = 89;
const b = 8;

let num1 = String(a) + String(b);
let num2 = String(b) + String(a);
if (parseInt(num1) > parseInt(num2)) {
    console.log(parseInt(num1));
} else {
    console.log(parseInt(num2));
}

console.log(Math.max(Number(`${a}${b}`, Number(`${b}${a}`))));