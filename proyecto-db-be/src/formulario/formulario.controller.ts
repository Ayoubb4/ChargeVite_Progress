import { Controller, Post, Body } from '@nestjs/common';
import { FormularioService } from './formulario.service';

@Controller('formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Post()
  async crearFormulario(@Body() formularioData: any) {
    return this.formularioService.create(
      formularioData.nombre,
      formularioData.apellidos,
      formularioData.correo,
      formularioData.direccion,
    );
  }
}
