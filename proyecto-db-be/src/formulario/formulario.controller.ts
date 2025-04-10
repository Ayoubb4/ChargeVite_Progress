import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { Formulario } from './formulario.entity';

@Controller('formulario')
export class FormularioController {
  constructor(private servicio: FormularioService) {}

  @Post()
  create(@Body() datos: Formulario) {
    return this.servicio.create(datos);
  }

  @Get()
  getAll() {
    return this.servicio.getAll();
  }
}
