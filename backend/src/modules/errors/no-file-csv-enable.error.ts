import { ApiError } from "../../helpers/api-error";

export class NoFileCsvEnableError extends ApiError {

    constructor(message?: string){
        super("Apenas arquivos CSV são permitidos.", 400)
    }
}