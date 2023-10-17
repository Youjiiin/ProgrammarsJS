//문자열 겹쳐쓰기
const my_string = "He11oWor1d";
const overwrite_string = "lloWorl";
const s = 2;

//1
const arr = [...my_string];
const result = arr.splice(s, overwrite_string.length, overwrite_string);
console.log("result : " + result.join(''));
//11oWor1

//2
const myStr = [...my_string];
myStr.splice(s, overwrite_string.length, overwrite_string);
console.log(myStr.join(""));
//HelloWorld

//1번으로 했는데 안된이유
//arr.splice(s, overwrite_string.length, overwrite_string);메소드는 원본 배열을 수정하며, 삭제된 요소의 배열을 반환함.
//즉 , const result = arr.splice(s, overwrite_string.length, overwrite_string);와 같이 선언을 해서 값을 할당하게 되면, 삭제된 요소가 할당되는 것임임