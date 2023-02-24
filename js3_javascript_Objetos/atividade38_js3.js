const cliente = {
    nome: "Paulo",
    idade: "25",
    email: "paulo@gmail.com",
    telefone: ["84 991762442", "84 988924021"],

};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",

}];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.log("O cliente não tem endereço cadastrado.")
}
