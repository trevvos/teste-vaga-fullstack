import { Request, Response } from 'express'
import { MovimentoImportService } from "../../../../modules/movimentos/services/movimento-import.service"
import { container } from 'tsyringe'
import { CsvImportMovimentosUseCase } from '../../../../modules/movimentos/use-cases/import-movimentos/csv-import-movimentos.use-case'

export class MovimentoImportController {

    async handle(req: Request, res: Response): Promise<void>{

        const importUseCase = container.resolve(CsvImportMovimentosUseCase)

        try {

            if(!req.file || req.file.mimetype !== 'text/csv'){
                res.status(400).json({ error: 'Apenas arquivos CSV são permitidos.'})
                return
            }

            const filePath = req.file.path

            await importUseCase.execute(filePath)
           
            res.status(200).json({message: "Arquivo importado com sucess"})

        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
} 