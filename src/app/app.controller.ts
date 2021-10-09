import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get('/')
    helloApi(){
        return "Documentação completa da api em: https://projudi.herokuapp.com/api"
    }
}
