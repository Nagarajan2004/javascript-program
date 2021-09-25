/*
1. while
2. do while
3. for
*/

// switch

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let i = 1;
while ( i <= 10 ) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j = j + 2) {
    console.log(j);
}

i = 0;
do {
    console.log(i);
    i = i + 3;
} while (i <= 30)

function switchCase(caseValue) {
    switch (caseValue.toLowerCase()) {
        case "sunday":
            console.log("Happy Sunday")
            break
        case "saturDay":
            console.log("I will find mu happiness soon")
            break
        case "monday":
            console.log("What the hell is this?")
            break
        default:
            console.log('Nothing to say, Simply Waste!')
    } 
}

switchCase("Monday");
switchCase("Tuesday");
switchCase("Friday");
switchCase("Saturday");
switchCase("Monday");

