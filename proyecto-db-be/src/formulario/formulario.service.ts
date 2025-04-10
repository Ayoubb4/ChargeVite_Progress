import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formulario } from './formulario.entity';
import { validate } from 'class-validator';

@Injectable()
export class FormularioService {
  constructor(
    @InjectRepository(Formulario)
    private readonly formularioRepository: Repository<Formulario>,
  ) {}

  // Buscar formulario por correo
  async findByEmail(email: string): Promise<Formulario | null> {
    return this.formularioRepository.findOne({ where: { correo: email } });
  }

  // Crear nuevo formulario
  async create(
    nombre: string,
    apellidos: string,
    correo: string,
    direccion: string,
  ): Promise<Formulario> {
    const nuevoFormulario = this.formularioRepository.create({
      nombre,
      apellidos,
      correo,
      direccion,
    });

    // Validar el formulario antes de guardarlo
    const errors = await validate(nuevoFormulario);
    if (errors.length > 0) {
      throw new Error('Formulario inválido');
    }

    // Guardar el formulario si es válido
    return this.formularioRepository.save(nuevoFormulario);
  }
}
