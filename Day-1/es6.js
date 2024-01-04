//arrow function

function foo(a,b){
    return a+b;
}

const foo = (a,b) =>a+b;


//array destructuring

const arr = [1,2,3,4,5];
const [a,b, ...rest] = arr;

//object destructuring

const obj = {x:1,y:2,z:3,z2:4};
const{x,y,...rest2}=obj;
let num1=3,num2=5;

//swap
[num1,num2] = [num2,num1];

//default values

//rest parameters

function restparameters(...args){
    console.log(args);
}

restparameters(1,2,"Hello","World");