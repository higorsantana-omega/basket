import { Module } from '@nestjs/common';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { ProxyRMQModule } from './proxy/proxyrmq.module';
import { PlayersController } from './players/players.controller';
import { LocalStorageModule } from './local-storage/local-storage.module';
import { PlayersModule } from './players/players.module';
import { ChallengesModule } from './challenges/challenges.module';

@Module({
  imports: [
    CategoriesModule,
    PlayersModule,
    ProxyRMQModule,
    LocalStorageModule,
    ChallengesModule,
  ],
  controllers: [CategoriesController, PlayersController],
  providers: [],
})
export class AppModule {}
