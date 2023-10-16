//영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
const input = "aBcDeFg";

str = input.split('');
//.split() : String 객체를 지정한 구분자를이용하여 여러개의 문자열로 나누는 함수
//.split(''); 이면 한글자 씩 구분짓는다.
//.split(); 이면 나눠지지 않는다.

//forEach(()=> {}) : 각 배열의 요소에 대해 제공된 함수를 한번씩 실행
//아래는 배열의 글자하나씩 확인하며 소문자 > 대문자 / 대문자 > 소문자로 변경해주는 함수 실행
//.toLowerCase() : 대문자 > 소문자
//.toUpperCase() : 소문자 > 대문자
str.forEach((value, index) => {
    if(value === value.toUpperCase()){
        str[index] = value.toLowerCase();
    } else {
        str[index] = value.toUpperCase();
    }
});

console.log(str); //배열로 출력됨
console.log(str.join(''));
//join() : 배열의 모든 요소를 연결해 하나의 문자열(String)로 만듦

console.log(input.map((char) => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())).join(''),);