const client = {
    nome: "Paulo",
    idade: "25",
    email: "paulo@gmail.com",
    telefone: ["84 991762442", "84 988924021"],

};

client.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",

}];

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
};

ligaParaCliente(...client.telefone);

const order = {
    destinatario: client.nome,
    ...client.enderecos[0],
};

console.log(order);