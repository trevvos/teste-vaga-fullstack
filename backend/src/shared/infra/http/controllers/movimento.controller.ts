import { Request, Response } from 'express'
import { container, inject, injectable } from 'tsyringe'
import { CsvImportMovimentosUseCase } from '../../../../modules/movimentos/use-cases/import-movimentos/csv-import-movimentos.use-case'
import { MovimentoRepository } from '../../../../modules/movimentos/repositories/movimentos.repository'
import { MovimentoImportService } from '../../../../modules/movimentos/services/movimento-import.service'
import { PrismaMovimentosRepository } from '../../database/prisma/repositories/prisma-movimentos.repository'

@injectable()
export class MovimentoImportController {


    async handleImportMovimentos(req: Request, res: Response): Promise<void>{

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

    async handleGetMovimentos(req: Request, res: Response):Promise<void>{
        try {
            const page = parseInt(req.query.page as string) || 1
            const pageSize = parseInt(req.query.pageSize as string) || 10

            console.log(page, pageSize)

            const importUseCase = container.resolve(PrismaMovimentosRepository)

            const movimentos = await importUseCase.findAll(page, pageSize)

            res.status(200).json(movimentos)

        } catch (error: any) {
            res.status(500).json({ error: error.message })
        }
    }
} 