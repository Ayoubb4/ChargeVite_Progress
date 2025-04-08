import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SpotifyService } from './spotify.service';

@ApiTags('services')
@Controller('services')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get('top-artists')
  @ApiOperation({ summary: 'Obtener los artistas principales de Spotify' })
  @ApiResponse({
    status: 200,
    description: 'Lista de artistas principales obtenida correctamente',
  })
  @ApiResponse({
    status: 500,
    description: 'Error al obtener los artistas de Spotify',
  })
  async getTopArtists() {
    return this.spotifyService.getTopArtists();
  }
}
