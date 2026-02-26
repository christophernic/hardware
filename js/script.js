const tarefas = [];

const formTarefa = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#input-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const mensagemErro = document.querySelector('#mensagem-erro');

function validarTarefa(texto) {
    if (texto.trim() === '') {
        return false;
    }
    return true;
}

function renderTarefas() {
    listaTarefas.textContent = ''; 

    for (let i = 0; i < tarefas.length; i++) {
        const li = document.createElement('li');
        li.textContent = tarefas[i];
        listaTarefas.appendChild(li);
    }
}

formTarefa.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const textoDigitado = inputTarefa.value;

    if (!validarTarefa(textoDigitado)) {
        mensagemErro.textContent = 'A tarefa não pode estar vazia. Digite algo!';
        mensagemErro.classList.remove('oculto');
        return;
    }

    mensagemErro.textContent = '';
    mensagemErro.classList.add('oculto');

    tarefas.push(textoDigitado.trim());

    renderTarefas();

    inputTarefa.value = '';
    inputTarefa.focus();
});
