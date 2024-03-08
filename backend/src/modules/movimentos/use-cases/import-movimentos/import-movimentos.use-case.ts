import { Movimento } from "../../entities/Movimento";

export interface ImportMovimentosUseCase {
    execute(filePath: string): Promise<Movimento[]>
}