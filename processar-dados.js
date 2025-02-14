function processarDados (callback) {
    callback(); 
}
processarDados(() => console.log("Processo concluído"));

async function buscarUsuario() {
    return {nome: "Matheus", id: 1}
}

buscarUsuario()
.then(({nome, id}) => {
    console.log("Nome:", nome, "- ID:",id);
    
})