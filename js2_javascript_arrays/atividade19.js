const nomesAlunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasAlunos = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [nomesAlunos, mediasAlunos];

function pesquisaAluno(nomeAluno) {
    if (listaDeAlunosEMedias[0].includes(nomeAluno)){

        const [nomesAlunos, mediasAlunos] = listaDeAlunosEMedias;
        const indice = nomesAlunos.indexOf(nomeAluno)

        console.log(`${nomeAluno} está presente na lista. sua média é ${mediasAlunos[indice]}`);
    } else {
        console.log(`${nomeAluno} não está presente na lista de alunos.`);
    };
};

pesquisaAluno('João')