//length
let a = ["HTML", "CSS", "JS", "React"];
console.log(a.length);
let s = a.toString();
console.log(s);
console.log(a.join('|'));

let emp = {
    firstname : "Harshita",
    lastname : "Gupta",
    salary : 10000000
}
console.log(delete emp.salary);
console.log(emp);

let a1 = [11,12,13];
let a2 = [14,15,16];
let a3 = [17,18,19];

let newArr = a1.concat(a2, a3);
console.log(newArr);

let n1 = [10,20,30];
n1.push(50);
n1.push(60,70,80);
n1.pop(10);
console.log(n1);

let m1 = [40,50,60];
m1.unshift(10,20,30);
console.log(m1);

let c1 = [20,30,40,50];
c1.splice(1,3);
c1.splice(1,0,4,5,6);
console.log(c1);
