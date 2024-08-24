import { PlayerEntity } from "src/application/entities/player.entitie";
import { UseCase } from "../use-case";
import { Logger } from "@nestjs/common";
import { PlayerRepository } from "src/application/repositories/players.repository";
import { PlayerNotFoundException } from "src/application/exceptions/not-found.exception";

export interface FindPlayerByIdUseCaseResquest {
    id: string;
}

export interface FindPlayerByIdUseCaseResponse {
    player: PlayerEntity;
}

export class FindPlayerByIdUseCase implements UseCase<FindPlayerByIdUseCaseResquest, FindPlayerByIdUseCaseResponse> {
    private readonly logger = new Logger(FindPlayerByIdUseCase.name);

    constructor(
        private readonly playerRepository: PlayerRepository
    ) { }

    async execute(
        request: FindPlayerByIdUseCaseResquest
    ): Promise<FindPlayerByIdUseCaseResponse> {
        this.logger.log('Executando Caso de Uso `FindPlayerByIdUseCase (Buscar Jogador pelo Id)`');
        const { id } = request;
        const player = await this.playerRepository.findById(id);

        if (!player) {
            throw new PlayerNotFoundException(id);
        }

        return { player };
    }

}