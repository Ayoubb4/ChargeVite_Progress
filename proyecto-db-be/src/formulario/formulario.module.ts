import { Module } from '@nestjs/common';
import { FormularioController } from './formulario.controller';
import { FormularioService } from './formulario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formulario } from './formulario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Formulario])],
  controllers: [FormularioController],
  providers: [FormularioService],
})
export class FormularioModule {}
