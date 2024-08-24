import { Injectable, Logger } from "@nestjs/common";
import { PlayerEntity } from "src/application/entities/player.entitie";
import { UseCase } from "../use-case";
import { PlayerRepository } from "src/application/repositories/players.repository";

export interface CreatePlayerUseCaseRequest {
    name: string;
}
export interface CreatePlayerUseCaseResponse {
    player: PlayerEntity;
}

@Injectable()
export class CreatePlayerUseCase implements UseCase<CreatePlayerUseCaseRequest, CreatePlayerUseCaseResponse> {

    private readonly logger = new Logger(CreatePlayerUseCase.name);

    constructor(private readonly playerRepository: PlayerRepository) { }

    async execute(request: CreatePlayerUseCaseRequest): Promise<CreatePlayerUseCaseResponse> {
        this.logger.log('Executando Caso de Uso `CreatePlayerUseCase (Criar Jogador)`');
        const { name } = request;
        const player = new PlayerEntity({ name });
        const createPlayer = await this.playerRepository.create(player);

        return { player: createPlayer };
    }
}

