import { Injectable, Logger } from "@nestjs/common";
import { PlayerEntity } from "src/application/entities/player.entitie";
import { UseCase } from "../use-case";
import { PlayerRepository } from "src/application/repositories/players.repository";

export interface FindAllPlayerUseCaseResponse {
    player: PlayerEntity[]
}

@Injectable()
export class FindAllPlayerUseCase implements UseCase<void, FindAllPlayerUseCaseResponse> {
    private readonly logger = new Logger(FindAllPlayerUseCase.name);

    constructor(private readonly playerRepository: PlayerRepository) { }

    async execute(request: void): Promise<FindAllPlayerUseCaseResponse> {
        this.logger.log('Executando caso de uso `FindAllPlayerUseCase(Recuperar Jogadores)`');
        const player = await this.playerRepository.findAll();
        return { player };
    }
}