import { Injectable, Logger } from "@nestjs/common";
import { PlayerEntity } from "src/application/entities/player.entitie";
import { UseCase } from "../use-case";
import { PlayerRepository } from "src/application/repositories/players.repository";
import { PlayerNotFoundException } from "src/application/exceptions/not-found.exception";

export interface UpdatePlayerNameParams {
    name: string;
}

export interface UpdatePlayerNameRequest {
    id: string,
    params: UpdatePlayerNameParams;
}

export interface UpdatePlayerNameResponse {
    player: PlayerEntity;
}

@Injectable()
export class UpdatePlayerNameUseCase implements UseCase<UpdatePlayerNameRequest, UpdatePlayerNameResponse> {
    private readonly logger = new Logger(UpdatePlayerNameUseCase.name);

    constructor(
        private readonly playerRepository: PlayerRepository
    ) { }

    async execute(request: UpdatePlayerNameRequest): Promise<UpdatePlayerNameResponse> {
        this.logger.log('Executando Caso de Uso "UpdatePlayerNameUseCase(Atualizar nome de Jogador)"');
        const { id, params } = request;
        const { name } = params;
        const player = await this.playerRepository.findById(id);
        if (!player) throw new PlayerNotFoundException(id);

        player.name = name;
        player.modified = new Date();
        await this.playerRepository.save(player);

        return { player };
    }
}
