import { Controller, Get, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller()
export class AppController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('saludo')
  async saludo(@Query('correo') correo: string) {
    const usuario = await this.usuariosService.findByCorreo(correo);
    if (usuario) {
      return `¡Hola de nuevo, ${usuario.nombre}!`;
    } else {
      return 'Primero tienes que registrarte.';
    }
  }
}
