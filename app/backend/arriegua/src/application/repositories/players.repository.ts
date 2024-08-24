import { PlayerEntity } from "../entities/player.entitie";

export abstract class PlayerRepository {
    abstract create (player: PlayerEntity): Promise<PlayerEntity>;
    abstract findById(id: number): Promise<PlayerEntity | null>;
    abstract findAll(): Promise<PlayerEntity[] | null>;
}