//덧셈식 출력
const a = 4;
const b = 5;

console.log(`${a} + ${b} = ${a+b}`)
//ES6 문자열 표기법 백틱(``) - 템플릿 리터럴(\n 필요없이 개행가능)
//${} : 변수 및 표현식 가능

//기존
const c = 1;
const d = "Hello";
const cd = "WOW!" + d + c;
console.log(cd);

//백틱 및 ${}
const e = 2;
const f = "Hello!!";
const ef = `WOW!${f}${e}`
console.log(ef);