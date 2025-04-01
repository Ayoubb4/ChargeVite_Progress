import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {
    @Get()
    getData(){
        return{ message: 'Hola desde el Backend' };
    }
}
