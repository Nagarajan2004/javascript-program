const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the number:", function(value) {
    const number = parseInt(value);
    if (number%2 == 0) {
        console.log(`${number} is Even number`);
    }
    else{
        console.log(`${number} is Odd number`);
    }

    rl.close()
})

rl.on("close", function() {
    process.exit()
})


