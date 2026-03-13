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
        
        const spanTarefa = document.createElement('span');
        spanTarefa.textContent = tarefas[i];
        spanTarefa.classList.add('texto-tarefa');
        li.appendChild(spanTarefa);
        
        const containerBotoes = document.createElement('div');
        containerBotoes.classList.add('container-botoes');
        
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('btn-editar');
        btnEditar.addEventListener('click', function() {
            editarTarefa(i);
        });
        
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn-remover');
        btnRemover.addEventListener('click', function() {
            removerTarefa(i);
        });
        
        containerBotoes.appendChild(btnEditar);
        containerBotoes.appendChild(btnRemover);
        li.appendChild(containerBotoes);
        listaTarefas.appendChild(li);
    }
}

function editarTarefa(indice) {
    const novoTexto = prompt('Editar tarefa:', tarefas[indice]);
    
    if (novoTexto === null) {
        return;
    }
    
    if (!validarTarefa(novoTexto)) {
        alert('A tarefa não pode estar vazia!');
        return;
    }
    
    tarefas[indice] = novoTexto.trim();
    renderTarefas();
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    renderTarefas();
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
