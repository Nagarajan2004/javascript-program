// Global variables

/*
function check(a) {
    var b = 5;
    let c = 6;
    if (a > 0) {
        // console.log(a + " is Positive");
        console.log(`${a} is Positive`) // Template Literals
    } else if (a === 0) {
        console.log(`${a} is Zero`)
        console.log(b,c)
    } else {
        console.log(`${a} is Negative`)
    }
    console.log(`${a} is a number`)
}

check(5)
check(0)
check(-4)
*/


function nestedCheck(a) {
    if ( a >= 0) {
        if ( a > 0 ){
            console.log(`a=${a} is positive`)
        } else {
            console.log(`a=${a} is Zero`)
        }
    } else {
        console.log(`a=${a} is Negative`)
    }
}

nestedCheck(-4)
nestedCheck(4)
nestedCheck(0)


