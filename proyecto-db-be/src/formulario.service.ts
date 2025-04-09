import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formulario } from './formulario.entity';

@Injectable()
export class FormularioService {
    constructor(
        @InjectRepository(Formulario)
        private repo: Repository<Formulario>,
    ) {}

    create(data: Formulario) {
        return this.repo.save(data);
    }

    getAll() {
        return this.repo.find();
    }
}
