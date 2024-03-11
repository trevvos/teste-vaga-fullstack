import { Movimento } from "../entities/Movimento";

export interface MovimentoRepository {
    findAll(page: number, pageSize: number): Promise<Movimento[]>
    findById(id: string): Promise<Movimento | null>
    createMany(movimentos: Movimento[]): Promise<Movimento[]>
    count(): Promise<number>
}