import { PrismaClient } from "@prisma/client";
import { Movimento } from "../../../../../modules/movimentos/entities/Movimento";
import { MovimentoRepository } from "../../../../../modules/movimentos/repositories/movimentos.repository";


export class PrismaMovimentosRepository implements MovimentoRepository {

    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }

    findAll(): Promise<Movimento[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Movimento | null> {
        throw new Error("Method not implemented.");
    }
    create(movimento: Movimento): Promise<Movimento> {
        throw new Error("Method not implemented.");
    }

}