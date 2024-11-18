"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
/**
 * Classe que representa uma Tarefa.
 */
class Tarefa {
    constructor(id, projeto, descricao, status) {
        this.id = id;
        this.projeto = projeto;
        this.descricao = descricao;
        this.status = status;
    }
}
exports.Tarefa = Tarefa;
