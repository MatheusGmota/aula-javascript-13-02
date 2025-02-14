let numero = -1

if (numero === 0) {
    console.log("É zero");
    
} else if (numero > 0) {
    console.log("Número é positvo");
    
} else {
    console.log("Número é negativo");
    
}

for (let i = 1; i < 11; i++) {
    console.log("contador", i);
}

let number = 1
let contador = 1
while (contador !== 5) {
    number += contador + 1
    contador += 1
}

console.log(number);
