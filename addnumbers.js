const a = 5;
const b = 6;

const sum = a + b;

console.log(sum);



console.log("5" == 5); //true    --> only check value
console.log("5" === 5); //false  --> it's check value and type

console.log("a" == "a");//true
console.log("a" === "a");//true
console.log("a" == "A");//false

console.log(1 + 1);//2
console.log(1 - 1);//0
console.log(1 + "1");//11 (one one) "act as string"
console.log(1 - "1");//0  "act as value"
console.log("1" + "1"); // act as string (one one)
console.log("1" - "1"); // act as value


console.log("2" + true - false);// true = 1, false = 0, "null = 0( in arithmatic operation only it's act 0)"
console.log(4 - false - true);


//get input from user

const x = parseInt(prompt("enter the value of x:"));
const y = parseInt(prompt("enter the value of y:"));
const sub = x - y;
console.log(sub)