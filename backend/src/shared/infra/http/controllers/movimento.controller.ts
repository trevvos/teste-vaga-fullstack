import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CsvImportMovimentosUseCase } from '../../../../modules/movimentos/use-cases/import-movimentos/csv-import-movimentos.use-case'
import { PrismaMovimentosRepository } from '../../database/prisma/repositories/prisma-movimentos.repository'
import { NoMovimentoFoundError } from '../../../../modules/errors/no-movimentos-found.error'
import { NoFileCsvEnableError } from '../../../../modules/errors/no-file-csv-enable.error'

export class MovimentoImportController {

    async handleImportMovimentos(req: Request, res: Response): Promise<void>{

        const importUseCase = container.resolve(CsvImportMovimentosUseCase)

            if(!req.file || req.file.mimetype !== 'text/csv'){
                throw new NoFileCsvEnableError()
            }

            const filePath = req.file.path

            await importUseCase.execute(filePath)
           
            res.status(200).json({message: "Arquivo importado com sucesso"})

    }

    async handleGetMovimentos(req: Request, res: Response):Promise<void>{
            const page = parseInt(req.query.page as string) || 1
            const pageSize = parseInt(req.query.pageSize as string) || 10

            const importRepository = container.resolve(PrismaMovimentosRepository)

            const movimentos = await importRepository.findAll(page, pageSize)

            res.status(200).json(
                {
                    totalByPage: movimentos.length,
                    movimentos
                }
            )

    }

    async handleGetMovimentoById(req: Request, res: Response): Promise<void>{
            const id = req.params.id
            const importRepository = container.resolve(PrismaMovimentosRepository)
            const movimento = await importRepository.findById(id)

            if(movimento){
                res.status(200).json(movimento)
            } else {
                throw new NoMovimentoFoundError()
            }
    }
} 