import fs from 'fs'
import csvParser from 'csv-parser';
import { Movimento } from "../../entities/Movimento";
import { ImportMovimentosUseCase } from "./import-movimentos-use-case";

class CsvImportMovimentosUseCase implements ImportMovimentosUseCase{
    execute(filePath: string): Promise<Movimento[]> {
        const movimentos: Movimento[] = []

        return new Promise((resolve, reject) =>{
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', (row) => {
                    const movimento: Movimento = {
                        nrInst: row.nrInst,
                        nrAgencia: row.nrAgencia,
                        cdClient: row.cdClient,
                        nmClient: row.nmClient,
                        nrCpfCnpj: row.nrCpfCnpj,
                        nrContrato: row.nrContrato,
                        dtContrato: row.dtContrato,
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
                        dtSeqPre: row.dtSeqPre,
                        dtVctPre: row.dtVctPre,
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
                })
                .on('end', () => {
                    resolve(movimentos)
                })
                .on('error', (error) =>{
                    reject(error)
                })
        })
    }
}

export default CsvImportMovimentosUseCase