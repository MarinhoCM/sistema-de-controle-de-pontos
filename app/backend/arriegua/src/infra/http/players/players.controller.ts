import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  CreatePlayerUseCase, FindAllPlayerUseCase,
  FindPlayerByIdUseCase, UpdatePlayerNameUseCase
} from 'src/application/use-cases/players';
import { PlayerMapper } from './mappers/player.mapper';
import { CreatePlayersBodyDto, IdParamDto } from './dto/players.dto';


@Controller('players')
export class PlayersController {
  constructor(
    private readonly findAllPlayerUseCase: FindAllPlayerUseCase,
    private readonly findPlayerByIdUseCase: FindPlayerByIdUseCase,
    private readonly createPlayerUseCase: CreatePlayerUseCase,
    private readonly updatePlayerNameUseCase: UpdatePlayerNameUseCase
  ) { }

  @Get()
  async findAll() {
    const { player } = await this.findAllPlayerUseCase.execute();
    const mappedPlayers = player.map(PlayerMapper.toDto);
    return mappedPlayers;
  }

  @Get(":id")
  async findById(@Param() params: IdParamDto) {
    console.log(`parametros: ${params.id}`)
    const { player } = await this.findPlayerByIdUseCase.execute(params);
    return PlayerMapper.toDto(player);
  }

  @Post()
  async create(@Body() body: CreatePlayersBodyDto) {
    const { player } = await this.createPlayerUseCase.execute(body);
    return PlayerMapper.toDto(player);
  }

  @Patch(':id')
  async updatePlayerName(@Param() id: string, @Body() body: CreatePlayersBodyDto) {
    const { name } = body;
    const { player } = await this.updatePlayerNameUseCase.execute({
      id: id,
      params: { name }
    });

    return PlayerMapper.toDto(player);
  }
}
