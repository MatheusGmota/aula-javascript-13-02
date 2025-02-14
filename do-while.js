do {
    let opcao = null // implementar: receber input do usuario

    switch (opcao) {
        case "A":
            console.log("Opção A selecionada");
            break
        case "B":
            console.log("Opção B selecionada");
            break
        case "C":
            console.log("Opção C selecionada");
            break
        default: 
            console.log("Opção inválida");   
    }
} while (opcao !== "S") 
