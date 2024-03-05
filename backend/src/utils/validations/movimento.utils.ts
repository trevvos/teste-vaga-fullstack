import { isValidCpfCnpj } from "./cpf-cnpj.utils";

export function isValidMovimento(row: any): boolean{

    if(!isValidCpfCnpj(row.nrCpfCnpj)){
        return false
    }

    return true
}