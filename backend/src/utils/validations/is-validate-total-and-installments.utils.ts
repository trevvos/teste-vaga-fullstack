import { Movimento } from "../../modules/movimentos/entities/Movimento";
import { parseMonetaryValue } from "./parse-monetary-value.utils";


export function isValidateTotalAndInstallments(movimento: Movimento): boolean{

    const nrPresta = parseInt(movimento.nrPresta)
    const vlPresta = parseMonetaryValue(movimento.vlPresta)
    const vlMora = parseMonetaryValue(movimento.vlMora)
    const vlMulta = parseMonetaryValue(movimento.vlMulta)
    const vlOutAcr = parseMonetaryValue(movimento.vlOutAcr)
    const vlTotal = parseMonetaryValue(movimento.vlTotal)
    const vlMovimento = parseMonetaryValue(movimento.vlAtual)

    const vlPrestaCalculed = vlTotal / nrPresta

    const totalInteiro = Math.trunc(vlPrestaCalculed)
    
    let vlTotalInstallments = vlPresta * nrPresta

    vlTotalInstallments += vlMora + vlMulta + vlOutAcr
    
    if ( totalInteiro !== vlPresta || vlMovimento > vlTotalInstallments){
        
        return false
    }
    
    return true
}