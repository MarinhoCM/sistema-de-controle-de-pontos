import { PlayerEntity } from "../entities/player.entitie";

export abstract class PlayerRepository {
    abstract create (player: PlayerEntity): Promise<PlayerEntity>;
    abstract findById(id: string): Promise<PlayerEntity | null>;
    abstract findAll(): Promise<PlayerEntity[] | null>;
    abstract save(player: PlayerEntity): Promise<void>; 
}