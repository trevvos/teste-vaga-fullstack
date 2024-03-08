import { Movimento } from "../entities/Movimento";
import { MovimentoRepository } from "../repositories/movimentos.repository";
import { ImportMovimentosUseCase } from "../use-cases/import-movimentos/import-movimentos.use-case";


export class MovimentoImportService {

    constructor(
        private importMovimentosUseCase: ImportMovimentosUseCase,
        private movimentoRepository: MovimentoRepository
    ){}

    async importMovimentos(filePath: string): Promise<Movimento[]>{

        try {
            const movimentos = await this.importMovimentosUseCase.execute(filePath)
      
            const createdMovimentos = await this.movimentoRepository.createMany(movimentos)
            return createdMovimentos

        } catch (error) {
            throw error
        }
    }

}