//문자열 str과 정수 n이 주어집니다.
//str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

const input_1 = "string";
const n = 5;

//repeat함수
//string.repeat([반복 count]);
console.log(input_1.repeat(n));

//process.stdout.write()
//console.log는 개행을 하지만 process.stdout.write()은 개행을 하지않아 한줄에 출력되게 할 수 있다.
for(i=0; i<n; i++){
    process.stdout.write(input_1);
}
console.log(' '); //개행을 위함(무시가능)

//문자열에 추가
let str = '';
for(i=0; i<n; i++){
    str += input_1;
}
console.log(str);