const cliente = {
    nome: "Paulo",
    idade: "25",
    email: "paulo@gmail.com",
    telefone: ["84 991762442", "84 988924021"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: R$ ${this.saldo}`)
        }
    }

};

cliente.efetuaPagamento(25)

