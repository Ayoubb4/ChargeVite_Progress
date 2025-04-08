import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule
import { SpotifyController } from './services/spotify.controller';
import { SpotifyService } from './services/spotify.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class AppModule {}
