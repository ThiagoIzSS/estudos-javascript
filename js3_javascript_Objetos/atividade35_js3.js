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

cliente.enderecos.push({
    rua: "Rua Atibaia",
    numero: 249,
    apartamento: false,
    complemento: "Gramoré",

});



const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

console.log(listaApenasApartamentos)