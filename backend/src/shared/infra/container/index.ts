import { container } from "tsyringe";
import { MovimentoRepository } from "../../../modules/movimentos/repositories/movimentos.repository";
import { PrismaMovimentosRepository } from "../database/prisma/repositories/prisma-movimentos.repository";

container.registerSingleton<MovimentoRepository>("MovimentosRepository", PrismaMovimentosRepository)

