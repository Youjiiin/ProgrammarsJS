//문자열 str이 주어집니다.
// 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
const str = "abcde";

for(let i = 0; i< str.length; i++) {
    console.log(str[i]);
}

[...str].forEach(value => console.log(value));
//forEach문이 실행이 더 빠름

[...str].map(x => console.log(x));