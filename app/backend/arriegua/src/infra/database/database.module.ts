import { Module } from '@nestjs/common';
import { PrismaPlayerRepository } from './prisma/repositories/prisma-players.repository';
import { PrismaService } from './prisma/prima.service';
import { PlayerRepository } from 'src/application/repositories/players.repository';

@Module({
  providers: [
    PrismaService,
    PrismaPlayerRepository,
    {
      provide: PlayerRepository,
      useClass: PrismaPlayerRepository,
    },
  ],
  exports: [PlayerRepository],
})
export class DatabaseModule {}
