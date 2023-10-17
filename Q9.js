//홀짝 구분하기
const n = 100;
const a = 1;

if ( n % 2 === 0 ) {
    console.log(n + " is even");
} else {
    console.log(n + " is odd");
}
if ( a % 2 === 0 ) {
    console.log(a + " is even");
} else {
    console.log(a + " is odd");
}

console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
console.log(a % 2 === 0 ? `${a} is even` : `${a} is odd`);
//삼항연산자가 더 빠름