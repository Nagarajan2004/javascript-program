const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("enter the number a:", function(number_a) {
    rl.question("enter the number b:", function(number_b) {
        rl.question("enter the number c:", function(number_c) {
            const num_a = parseInt(number_a);
            const num_b = parseInt(number_b);
            const num_c = parseInt(number_c);
            if (num_a > num_c && num_a > num_c) {
                console.log(`${number_a} is biggest number`);
            }
            else if (num_b > num_a && num_b > num_c) {
                console.log(`${number_b} is biggest number`);
            }
            else {
                console.log(`${number_c} is biggest number`);
            }
            rl.close()
        })
    })
})

rl.on("close", function() {
    process.exit()
})