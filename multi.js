const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("enter facteor",function(value){
    rl.question("enter range", function(valueOfRange){
        const factor = value
        const range = valueOfRange
        let i = 1
        while (i <= range){
            let mul = i*factor
            console.log(`${i}*${factor}=${mul}`)
            i++   
        }
        rl.close()
    })
})

rl.on("close", function() {
    process.exit()
})