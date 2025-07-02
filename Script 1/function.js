function sum(x , y) {
    return x+y;
}
// console.log(sum(2,3));

function welcomeJe(name) {
    console.log("Hello " + name + " gfg")
}

let userName = "user";
// console.log(welcomeJe(userName));

const mul = function(x,y) {
    return x*y;
}
// console.log(mul(3,4));

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map( function (s) {
    return s.length;
})
console.log("Normal way : ", a2);
const a3 = a.map( (s) => s.length);
console.log("By arrow function : ", a3);

function num(n, callback) {
    return callback(n);
}
const double = (n) => n*2;
console.log(num(5,double));
