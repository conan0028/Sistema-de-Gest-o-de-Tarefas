import { Tarefa } from './Tarefa'

export class GestorTarefas {
    private tarefas: Tarefa[]; // Propriedade agora é privada

    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa: Tarefa): void {
        const indice = this.tarefas.findIndex(t => t.id === tarefa.id);
        if (indice <= -1) {
            this.tarefas.push(tarefa);
        } else {
            console.error('Tarefa já cadastrada');
        }
    }

    atualizarStatus(id: number, status: string): void {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.status = status;
            console.log(`Status da tarefa ${id} atualizado para: ${status}`);
        } else {
            console.error('Tarefa não encontrada');
        }
    }

    consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        const tarefasDoProjeto = this.tarefas.filter(t => t.projeto === projeto);
        if (tarefasDoProjeto.length > 0) {
            return tarefasDoProjeto;
        } else {
            console.warn(`Nenhuma tarefa encontrada para o projeto: ${projeto}`);
            return [];
        }
    }
}
