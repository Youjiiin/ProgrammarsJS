let a = 2;
let b = 91;

let aa = Number(`${a}${b}`);
let bb = 2 * Number(a) * Number(b);

console.log(aa);
console.log(bb);

if( aa > bb ){
    console.log(aa);
} else if(aa === bb){
    console.log(aa);
} else {
    console.log(bb);
}
