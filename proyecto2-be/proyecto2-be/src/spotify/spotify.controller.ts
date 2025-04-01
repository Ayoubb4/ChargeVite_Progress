import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SpotifyService } from './spotify.service';

@ApiTags('spotify')
@Controller('spotify')
export class SpotifyController {
    constructor(private readonly spotifyService: SpotifyService) {}

    @Get('top-artists')
    @ApiOperation({ summary: 'Obtener los artistas principales de Spotify' })
    @ApiResponse({ status: 200, description: 'Lista de artistas principales' })
    async getTopArtists() {
        return this.spotifyService.getTopArtists();
    }
}
