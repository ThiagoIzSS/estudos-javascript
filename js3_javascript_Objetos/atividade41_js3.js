const dados = require("./atividade40_js3.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

const clienteEmObjeto = JSON.parse(clienteEmString);

console.log(clienteEmObjeto);
