import { Injectable, Logger } from "@nestjs/common";
import { PlayerEntity } from "src/application/entities/player.entitie";
import { PlayerRepository } from "src/application/repositories/players.repository";
import { PrismaService } from "../prima.service";
import { PrismaPlayerMapper } from "../mapper/prima-player.mapper";

@Injectable()
export class PrismaPlayerRepository implements PlayerRepository {
    private readonly logger = new Logger(PrismaPlayerRepository.name)

    constructor(private readonly prismaService: PrismaService) { }

    async create(player: PlayerEntity): Promise<PlayerEntity> {
        this.logger.log(`Iniciando registro de Jogador`);
        const playerPrismaData = PrismaPlayerMapper.toPrisma(player);
        const createdPlayer = await this.prismaService.player.create({
            data: playerPrismaData,
        })

        return PrismaPlayerMapper.toDomain(createdPlayer);
    }

    async findById(id: string): Promise<PlayerEntity | null> {
        this.logger.log(`Iniciando busca por jogador ${id}`);
        const playerPrismaData = await this.prismaService.player.findUnique(
            { where: { id: id } }
        );
        if (!playerPrismaData) return null
        const player = PrismaPlayerMapper.toDomain(playerPrismaData);
        return player;
    }

    async findAll(): Promise<PlayerEntity[]> {
        this.logger.log(`Iniciando busca por jogadores`);
        const playerPrismaData = await this.prismaService.player.findMany();
        const player = playerPrismaData.map(PrismaPlayerMapper.toDomain)
        return player;
    }

    async save(player: PlayerEntity): Promise<void> {
        this.logger.log(`Salvando dados do jogador id: ${player.id}`);
        const playerPrismaData = PrismaPlayerMapper.toPrisma(player);
        const { id, ...data } = playerPrismaData;
        await this.prismaService.player.update({
            where: { id: player.id },
            data
        });
    }
}