const student = {
    firstName: "Bharani",
    class: 10,
    marks: {
        maths: 96,
        english: 89
    },
    result: function() {
        let sureName = "lakshmi"
        console.log(`${this.firstName} ${sureName} completed his 10th stadard with 96%`)
    }
}

console.log(typeof student);    // "typeof" retrun datatype


/*console.log(student.firstName);   

console.log(student.marks.maths);

console.log(student.result());*/

// object templete
function Person( name = "Sasi", age = 22) {  //first later capital(uppercase)
    this.name = name,
    this.age = age
}
const person = new Person()
const person2 = new Person("Joshua", 18)

/*console.log(Person())

console.log(person);
console.log(person2);

for (i in student) {
    console.log(i)     // in this place --> index = key
}
// for ("variable" of "name") --> don't use object

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));*/

person2.gender = "Male"
console.log(person2)

Person.prototype.profession = "student"  //doubt
console.log(person2)   