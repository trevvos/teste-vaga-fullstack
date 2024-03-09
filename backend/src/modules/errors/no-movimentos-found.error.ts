import { ApiError } from "../../helpers/api-error";

export class NoMovimentoFoundError extends ApiError {

    constructor(message?: string){
        super("Nenhum movimento encontrado. Repositorio está vázio.", 404)
    }
}