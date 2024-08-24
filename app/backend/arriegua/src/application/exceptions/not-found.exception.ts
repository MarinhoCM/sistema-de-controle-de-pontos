import { NotFoundException } from "@nestjs/common";

export class PlayerNotFoundException extends NotFoundException{
    constructor (playerId: string) {
        super(`O Jogador Id: "${playerId}" não foi encontrado`);
    }
}