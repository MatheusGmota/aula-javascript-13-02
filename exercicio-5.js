let texto = "ola"

// console.log("Transformando em maiúsculas");

converterParaMaiusculas = (string) => {
    return string.toUpperCase();
    let mensagem = "Transformando em maiúsculas"
} 

console.log(mensagem); // Não é possível acessar a variável 'mensagem' por que ela foi definida e atribuída dentro do escopo da função

console.log("Texto em maiúsculas:", converterParaMaiusculas(texto));

