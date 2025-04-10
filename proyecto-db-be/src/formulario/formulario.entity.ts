import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString, Matches, Length } from 'class-validator';

@Entity()
export class Formulario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres.' })
  @Column()
  nombre: string;

  @IsString()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'Apellidos solo puede contener letras y espacios.',
  })
  @Column()
  apellidos: string;

  @IsEmail({}, { message: 'El correo no tiene un formato válido.' })
  @Column()
  correo: string;

  @Column()
  direccion: string;
}
