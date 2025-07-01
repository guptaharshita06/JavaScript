//var
//redifining and reuploading is allowed
var n = 5;
console.log(n);
var n = 9;
console.log(n);

//let
//redifining is not allowed but reuploading is allowed
let m = 8;
console.log(m);
m = 7;
console.log(m);

//const
//redifining and reuploading both are not allowed
const k = 6;
console.log(k);

//Datatypes
//Two types Primitive and Non primitive
//Primitive- Numbers, String, Boolen, Undefined, Null, BigInt, symbol

//Numbers
let pi = 3.14;
console.log(pi);

//string
let s1 = "Hello";
console.log(s1);

//boolen
let bool = true;
console.log(bool);

//undefined
let brr;
console.log(brr);

//null
let bor = null;
console.log(bor);

//BigInt
let sem = 100000000000000000000000000000000000000000000000000000000;
console.log(sem);

//symbols
let sym = Symbol("Hello");
console.log(sym);

//NonPrimitive - Object, Array, Function

//Object
let obj = {
    name : "Ram",
    age : 67
}
console.log(obj);

//Array
let arr = ["mam", "sam", "lam"];
console.log(arr);

//Function
function fun() {
    console.log("Holaa Jecrc");
}
fun();
