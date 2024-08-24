import { PlayerEntity } from "src/application/entities/player.entitie";
import { Player as PlayerPrisma } from '@prisma/client';

export class PrismaPlayerMapper {
  public static toPrisma(player: PlayerEntity): PlayerPrisma {
    return {
      id: player.id,
      name: player.name,
      created_at: player.created,
      updated_at: player.modified
    };
  }

  public static toDomain(playerPrismaData: PlayerPrisma) {
    return new PlayerEntity(
      {
        name: playerPrismaData.name
      }, playerPrismaData.id
    );
  }
}
