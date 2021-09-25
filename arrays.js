let array = []; //empty array

console.log(array);

array = [1, 2, 3, 4, 5];

console.log(array);

console.log(array.indexOf(3)); // retrun index (print index number)

console.log(array[3]); // retrun the element (print index value)

console.log(array.length)

array = [3, 'string', 5.32, true, undefined, null, {name: "john", age: 15, }]

console.log(array)

console.log(array.pop())  // retrun last value in array
console.log(array)

console.log(array.shift())  // retrun first value in array
console.log(array)

array.push(143)  // add value last in array
array.unshift(431)  // add value first in array

console.log(array)

array.splice(1, 0, 34, "asdf")  // 1st starting index, 2nd number of elements will be removed, 3rd element which be add
console.log(array)

array = [...array, ["sakthi", "siva", "subramani"]]
console.log(array)

console.log(array[9][1])

array = [3, "string", 5.32, true, undefined, null,{name: "john", age: 15}]

console.log(array[6].name)



//______________________________________________________________________//


let i;

let l = array.length

for (i = 0; i < l; i++) {
    console.log(array[i])
}

for (let j of array ) {   // use of retrun elements
    console.log(j)
}

for (let j in array ) {   // use of retrun index
    console.log(j)
}

