import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Formulario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellidos: string;

    @Column()
    correo: string;

    @Column()
    direccion: string;
}
