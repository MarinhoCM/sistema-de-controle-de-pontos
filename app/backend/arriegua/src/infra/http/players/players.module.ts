import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { CreatePlayerUseCase, FindAllPlayerUseCase, FindPlayerByIdUseCase, UpdatePlayerNameUseCase } from 'src/application/use-cases/players';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PlayersController],
    providers: [
        CreatePlayerUseCase,
        FindAllPlayerUseCase,
        FindPlayerByIdUseCase,
        UpdatePlayerNameUseCase
    ]
})
export class PlayersModule { }
