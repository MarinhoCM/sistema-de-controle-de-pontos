import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  
  async getPlayers() {
    return 'Hello World!';
  }
  
}
