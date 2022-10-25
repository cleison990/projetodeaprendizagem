const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let RandomNumber = "";

for (let i = 0; i < 6; i++){

    RandomNumber += numbers[getRamdomNumberArray()]
    
}

console.log(`o numero gerado foi ${RandomNumber}!!!`)

function getRamdomNumberArray() {
    return Math.floor(Math.random() * numbers.length)
}