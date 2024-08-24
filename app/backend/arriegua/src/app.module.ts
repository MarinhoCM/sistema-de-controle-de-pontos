import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [InfraModule, DatabaseModule],
})
export class AppModule {}
