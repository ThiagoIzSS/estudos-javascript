const clientes = require ("./atividade42_js3.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
};

const encontrado = encontrar(clientes, "nome", "Kirby");

console.log(encontrado);
