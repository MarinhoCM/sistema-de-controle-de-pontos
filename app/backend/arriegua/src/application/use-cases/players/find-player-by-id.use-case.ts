import { Injectable, Logger } from "@nestjs/common";
import { PlayerEntity } from "src/application/entities/player.entitie";
import { UseCase } from "../use-case";
import { PlayerRepository } from "src/application/repositories/players.repository";
import { PlayerNotFoundException } from "src/application/exceptions/not-found.exception";

export interface FindPlayerByIdUseCaseResquest {
    id: string;
}

export interface FindPlayerByIdUseCaseResponse {
    player: PlayerEntity;
}

@Injectable()
export class FindPlayerByIdUseCase implements UseCase<FindPlayerByIdUseCaseResquest, FindPlayerByIdUseCaseResponse> {
    private readonly logger = new Logger(FindPlayerByIdUseCase.name);

    constructor(private readonly playerRepository: PlayerRepository) { }

    async execute(request: FindPlayerByIdUseCaseResquest): Promise<FindPlayerByIdUseCaseResponse> {
        this.logger.log('Executando caso de uso `FindAllPlayerUseCase(Recuperar Jogadores)`');
        const { id } = request;
        const player = await this.playerRepository.findById(id);

        if (!player) {
            throw new PlayerNotFoundException(id);
        }
        return { player };
    }
}