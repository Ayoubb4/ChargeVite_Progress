import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formulario } from './formulario/formulario.entity';
import { FormularioModule } from './formulario/formulario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'proyecto_db',
      entities: [Formulario],
      synchronize: true,
    }),
    FormularioModule,
  ],
})
export class AppModule {}
