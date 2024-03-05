import { Movimento } from "../entities/Movimento";

export interface MovimentoRepository {
    findAll(): Promise<Movimento[]>
    findById(id: number): Promise<Movimento | null>
    create(movimento: Movimento): Promise<Movimento>
    createMany(movimentos: Movimento[]): Promise<Movimento[]>
}