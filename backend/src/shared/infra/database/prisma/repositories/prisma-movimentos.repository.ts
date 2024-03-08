import { PrismaClient, Movimento as PrismaMovimento } from "@prisma/client";
import { Movimento } from "../../../../../modules/movimentos/entities/Movimento";
import { MovimentoRepository } from "../../../../../modules/movimentos/repositories/movimentos.repository";


export class PrismaMovimentosRepository implements MovimentoRepository {

    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }

    async createMany(movimentos: Movimento[]): Promise<Movimento[]>{
        const createdMovimentos: PrismaMovimento[] = await Promise.all(
           
            movimentos.map((movimento) => this.prisma.movimento.create({data: movimento}))
        )

        return createdMovimentos.map(this.mapToMovimento)
    }   

    findAll(): Promise<Movimento[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Movimento | null> {
        throw new Error("Method not implemented.");
    }

    async create(movimento: Movimento): Promise<Movimento> {
        return await this.prisma.movimento.create({
            data: movimento
        })
    }

    private mapToMovimento(prismaMovimento: PrismaMovimento): Movimento{
        return {
            id: prismaMovimento.id,
            nrInst: prismaMovimento.nrInst,
            nrAgencia: prismaMovimento.nrAgencia,
            cdClient: prismaMovimento.cdClient,
            nmClient: prismaMovimento.nmClient,
            nrCpfCnpj: prismaMovimento.nrCpfCnpj,
            nrContrato: prismaMovimento.nrContrato,
            dtContrato: prismaMovimento.dtContrato,
            qtPrestacoes: prismaMovimento.qtPrestacoes,
            vlTotal: prismaMovimento.vlTotal,
            cdProduto: prismaMovimento.cdProduto,
            dsProduto: prismaMovimento.dsProduto,
            cdCarteira: prismaMovimento.cdCarteira,
            dsCarteira: prismaMovimento.dsCarteira,
            nrProposta: prismaMovimento.nrProposta,
            nrPresta: prismaMovimento.nrPresta,
            tpPresta: prismaMovimento.tpPresta,
            nrSeqPre: prismaMovimento.nrSeqPre,
            dtVctPre: prismaMovimento.dtVctPre,
            vlPresta: prismaMovimento.vlPresta,
            vlMora: prismaMovimento.vlMora,
            vlMulta: prismaMovimento.vlMulta,
            vlOutAcr: prismaMovimento.vlOutAcr,
            vlIof: prismaMovimento.vlIof,
            vlDescon: prismaMovimento.vlDescon,
            vlAtual: prismaMovimento.vlAtual,
            idSituac: prismaMovimento.idSituac,
            idSitVen: prismaMovimento.idSitVen,
            isInconsistent: prismaMovimento.isInconsistent
        }
    }

    private mapToPrismaMovimento(movimento: Movimento): PrismaMovimento{
        return {
            id: movimento.id,
            nrInst: movimento.nrInst,
            nrAgencia: movimento.nrAgencia,
            cdClient: movimento.cdClient,
            nmClient: movimento.nmClient,
            nrCpfCnpj: movimento.nrCpfCnpj,
            nrContrato: movimento.nrContrato,
            dtContrato: movimento.dtContrato,
            qtPrestacoes: movimento.qtPrestacoes,
            vlTotal: movimento.vlTotal,
            cdProduto: movimento.cdProduto,
            dsProduto: movimento.dsProduto,
            cdCarteira: movimento.cdCarteira,
            dsCarteira: movimento.dsCarteira,
            nrProposta: movimento.nrProposta,
            nrPresta: movimento.nrPresta,
            tpPresta: movimento.tpPresta,
            nrSeqPre: movimento.nrSeqPre,
            dtVctPre: movimento.dtVctPre,
            vlPresta: movimento.vlPresta,
            vlMora: movimento.vlMora,
            vlMulta: movimento.vlMulta,
            vlOutAcr: movimento.vlOutAcr,
            vlIof: movimento.vlIof,
            vlDescon: movimento.vlDescon,
            vlAtual: movimento.vlAtual,
            idSituac: movimento.idSituac,
            idSitVen: movimento.idSitVen,
            isInconsistent: movimento.isInconsistent
        }
    }

}