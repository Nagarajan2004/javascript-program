const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the number:", function(number) {
    let i = 1;
    let s = 0;  
    while (i <= number) {
        if (number%i==0){
            s++
        }
        i++
    }
    if (s==1 || s==0) {
        console.log(`${number} is neither prime nor composite number`)
    } 
    else if (s==2) {
        console.log(`${number} is prime number `)
    }
    else if (s > 2) {
        console.log(`${number} is not a prime number`)
    }

    rl.close()
})

rl.on("close", function() {
    process.exit()
})
