import fs from 'fs'
import { v4 as uuidv4} from 'uuid'
import csvParser from 'csv-parser';
import { Movimento } from "../../entities/Movimento";
import { ImportMovimentosUseCase } from "./import-movimentos.use-case";
import { MovimentoRepository } from '../../repositories/movimentos.repository';
import { convertToDate } from '../../../../utils/validations/date.utils';
import { isValidMovimento } from '../../../../utils/validations/movimento.utils';
import { formatCurrency } from '../../../../utils/formatters/currency-formatter.utils';
import { isValidateTotalAndInstallments } from '../../../../utils/validations/is-validate-total-and-installments.utils';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CsvImportMovimentosUseCase implements ImportMovimentosUseCase{
    
    constructor(@inject("MovimentosRepository") private movimentoRepository: MovimentoRepository){}

    execute(filePath: string): Promise<Movimento[]> {
        const movimentos: Movimento[] = []

        return new Promise((resolve, reject) =>{
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', async (row) => {

                    if(isValidMovimento(row)){

                        const movimento: Movimento = {
                            id: uuidv4(),
                            nrInst: row.nrInst,
                            nrAgencia: row.nrAgencia,
                            cdClient: row.cdClient,
                            nmClient: row.nmClient,
                            nrCpfCnpj: row.nrCpfCnpj,
                            nrContrato: row.nrContrato,
                            dtContrato: convertToDate(row.dtContrato),
                            qtPrestacoes: row.qtPrestacoes,
                            vlTotal: formatCurrency(row.vlTotal),
                            cdProduto: row.cdProduto,
                            dsProduto: row.dsProduto,
                            cdCarteira: row.cdCarteira,
                            dsCarteira: row.dsCarteira,
                            nrProposta: row.nrProposta,
                            nrPresta: row.nrPresta,
                            tpPresta: row.tpPresta,
                            nrSeqPre: row.nrSeqPre,
                            dtVctPre: convertToDate(row.dtVctPre),
                            vlPresta: formatCurrency(row.vlPresta),
                            vlMora: formatCurrency(row.vlMora),
                            vlMulta: formatCurrency(row.vlMulta),
                            vlOutAcr: formatCurrency(row.vlOutAcr),
                            vlIof: formatCurrency(row.vlIof),
                            vlDescon: formatCurrency(row.vlDescon),
                            vlAtual: formatCurrency(row.vlAtual),
                            idSituac: row.idSituac,
                            idSitVen: row.idSitVen,
                            isInconsistent: false
                        }

                        if(isValidateTotalAndInstallments(movimento)){
                            
                            movimentos.push(movimento)
                        
                        } else {
                            //Adiciona os valores inconsistentes como true para ser sinalizado no frontend
                            movimento.isInconsistent = true

                            movimentos.push(movimento)
                        }
                    }
                    
                })
                .on('end', async () => {
                 
                    const createdMovimentos = await this.movimentoRepository.createMany(movimentos)

                    resolve(createdMovimentos)          
                })
                .on('error', (error) =>{
                    reject(error)
                })
        })
    }
}