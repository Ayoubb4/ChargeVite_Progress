import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios/usuarios.service';
import { Usuario } from './usuarios/usuarios.entity';
function isUsuario(data: unknown): data is Usuario {
  if (data && typeof data === 'object') {
    const record = data as Record<string, unknown>;
    return typeof record.nombre === 'string';
  }
  return false;
}

@Controller()
export class AppController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get('saludo')
  async saludo(@Query('correo') correo: string): Promise<string> {
    const resultado: unknown = await this.usuariosService.findByCorreo(correo);
    if (!isUsuario(resultado)) {
      return 'Primero tienes que registrarte.';
    }
    return `¡Hola de nuevo, ${resultado.nombre}!`;
  }

  @Post('formulario')
  async registrar(@Body() body: Partial<Usuario>): Promise<any> {
    const { nombre, apellidos, correo, direccion } = body;

    if (!nombre || !apellidos || !correo || !direccion) {
      return { message: 'Faltan datos obligatorios para el registro.' };
    }

    const existente = await this.usuariosService.findByCorreo(correo);
    if (existente) {
      return { message: `¡Hola de nuevo, ${existente.nombre}!` };
    }

    const nuevo = await this.usuariosService.create(
      nombre,
      apellidos,
      correo,
      direccion,
    );
    return { message: 'Usuario registrado con éxito.', usuario: nuevo };
  }
}
