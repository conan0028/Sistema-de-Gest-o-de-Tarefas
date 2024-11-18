"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tarefa_1 = require("./Tarefa");
const GestorTarefas_1 = require("./GestorTarefas");
const tarefa1 = new Tarefa_1.Tarefa(1, 'aula1', 'Aula de TypeScript 1', 'Pendente');
const tarefa2 = new Tarefa_1.Tarefa(2, 'lab1', 'Laboratório de TypeScript 1', 'Pendente');
const tarefa3 = new Tarefa_1.Tarefa(3, 'aula2', 'Aula de TypeScript 2', 'Pendente');
const gestorTarefas = new GestorTarefas_1.GestorTarefas();
// Função para adicionar tarefas
function adicionarTarefas() {
    gestorTarefas.adicionarTarefa(tarefa1);
    gestorTarefas.adicionarTarefa(tarefa2);
    gestorTarefas.adicionarTarefa(tarefa3);
    console.log('Tarefas adicionadas:');
    console.log(gestorTarefas);
}
// Função para atualizar o status de uma tarefa
function atualizarStatus() {
    console.log('Atualizando status da tarefa 1 para "Concluída"');
    gestorTarefas.atualizarStatus(1, 'Concluída');
    console.log(gestorTarefas);
}
// Função para consultar tarefas por projeto
function consultarTarefasPorProjeto(projeto) {
    console.log(`Consultando tarefas do projeto: ${projeto}`);
    const tarefas = gestorTarefas.consultarTarefasPorProjeto(projeto);
    console.log(tarefas);
}
// Executar os testes
adicionarTarefas();
atualizarStatus();
consultarTarefasPorProjeto('aula1');
consultarTarefasPorProjeto('aula2');
consultarTarefasPorProjeto('projeto_inexistente');
