import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formulario } from './formulario.entity';
import { FormularioService } from './formulario.service';
import { FormularioController } from './formulario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Formulario])],
  providers: [FormularioService],
  controllers: [FormularioController],
})
export class FormularioModule {}
