const nomesAlunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const mediasAlunos = [7, 4.5, 8, 7.5];

const reprovados = nomesAlunos.filter((_, indice) => {
    return mediasAlunos[indice] < 7;

});

console.log(reprovados)
