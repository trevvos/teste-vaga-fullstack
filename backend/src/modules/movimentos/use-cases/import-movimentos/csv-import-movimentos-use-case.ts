import fs from 'fs'
import { v4 as uuidv4} from 'uuid'
import csvParser from 'csv-parser';
import { Movimento } from "../../entities/Movimento";
import { ImportMovimentosUseCase } from "./import-movimentos-use-case";
import { MovimentoRepository } from '../../repositories/movimentos.repository';
import { PrismaMovimentosRepository } from '../../../../shared/infra/database/prisma/repositories/prisma-movimentos-repository';
import { convertToDate } from '../../../../utils/validations/date.utils';
import { isValidMovimento } from '../../../../utils/validations/movimento.utils';

class CsvImportMovimentosUseCase implements ImportMovimentosUseCase{
    private readonly movimentoRepository: MovimentoRepository

    constructor(){
        this.movimentoRepository = new PrismaMovimentosRepository()
    }

    execute(filePath: string): Promise<Movimento[]> {
        const movimentos: Movimento[] = []

        return new Promise((resolve, reject) =>{
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', (row) => {

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
                            vlTotal: row.vlTotal,
                            cdProduto: row.cdProduto,
                            dsProduto: row.dsProduto,
                            cdCarteira: row.cdCarteira,
                            dsCarteira: row.dsCarteira,
                            nrProposta: row.nrProposta,
                            nrPresta: row.nrPresta,
                            tpPresta: row.tpPresta,
                            nrSeqPre: row.nrSeqPre,
                            dtVctPre: convertToDate(row.dtVctPre),
                            vlPresta: row.vlPresta,
                            vlMora: row.vlMora,
                            vlMulta: row.vlMulta,
                            vlOutAcr: row.vlOutAcr,
                            vlIof: row.vlIof,
                            vlDescon: row.vlDescon,
                            vlAtual: row.vlAtual,
                            idSituac: row.idSituac,
                            idSitVen: row.idSitVen
                        }

                        movimentos.push(movimento)
                    } else {
                        console.log('Registro inválido: ', row.nrCpfCnpj)
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

export default CsvImportMovimentosUseCase