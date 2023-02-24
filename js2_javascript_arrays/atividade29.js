const listaDeChamada = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const listaAtualizada = [... new Set(listaDeChamada)];

console.log(listaAtualizada);