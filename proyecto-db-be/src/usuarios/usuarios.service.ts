import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  // Método para encontrar un usuario por correo
  async findByCorreo(correo: string): Promise<Usuario | null> {
    return await this.usuarioRepository.findOne({ where: { correo } });
  }

  // Método para crear un nuevo usuario
  async create(
    nombre: string,
    apellidos: string,
    correo: string,
    direccion: string,
  ): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create({
      nombre,
      apellidos,
      correo,
      direccion,
    });
    return await this.usuarioRepository.save(nuevoUsuario);
  }
}
