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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== 'function') {
        console.log(`${chave} ----- ${cliente[chave]}`)
    }

};


