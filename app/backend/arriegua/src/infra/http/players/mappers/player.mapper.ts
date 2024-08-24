import { PlayerEntity } from "src/application/entities/player.entitie";


export class PlayerMapper {
    public static toDto(player: PlayerEntity){
        return {
            id: player.id,
            name: player.name,
            created: player.created,
            modified: player.modified
        };
    }
}