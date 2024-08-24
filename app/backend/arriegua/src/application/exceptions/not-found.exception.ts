import { NotFoundException } from "@nestjs/common";

export class PlayerNotFoundException extends NotFoundException{
    constructor (playerId: number) {
        super(`O Jogador Id: "${playerId}" não foi encontrado`);
    }
}