const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11222333444",
    email: "andre@gmail.com"

};

console.log(`O nome do (a) cliente é ${cliente['nome']}, tem ${cliente['idade']} anos e seu cpf inicia por ${cliente['cpf'.substring(0, 3)]}`);
