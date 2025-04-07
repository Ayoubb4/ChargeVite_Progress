import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SpotifyController } from './spotify/spotify.controller';
import { SpotifyService } from './spotify/spotify.service';

@Module({
  controllers: [SpotifyController],
  providers: [SpotifyService],
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
