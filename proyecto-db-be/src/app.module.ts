import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formulario } from './formulario/formulario.entity';
import { FormularioModule } from './formulario/formulario.module';
import { Usuario } from './usuarios/usuarios.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'proyecto_db',
      entities: [Formulario, Usuario],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Usuario]),
    FormularioModule,
    UsuariosModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
