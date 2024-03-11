import { Movimento } from "../entities/Movimento";

export interface Summary {
    isInconsistent: number;
    ok: number;   
}

export interface MovimentoRepository {
    findAll(page: number, pageSize: number): Promise<{movimentos: Movimento[]; summary: Summary}>
    findById(id: string): Promise<Movimento | null>
    createMany(movimentos: Movimento[]): Promise<Movimento[]>
    count(): Promise<number>
}