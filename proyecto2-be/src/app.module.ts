import { Module } from '@nestjs/common';
import { SpotifyController } from './spotify/spotify.controller';
import { SpotifyService } from './spotify/spotify.service';

@Module({
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class AppModule {}
