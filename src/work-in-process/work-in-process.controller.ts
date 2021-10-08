import { Get, Param, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {GetUser} from '../auth/get-user-decorator';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { TechnicianEntity } from 'src/legal-technician/entity/Technician.entity';
import { WorkInProcessService } from './work-in-process.service';


@UseGuards(JwtAuthGuard)
@ApiTags('WorkInProcess')
@ApiBearerAuth()
@Controller('work-in-process')
export class WorkInProcessController {

    constructor(
        private readonly workProcess :WorkInProcessService
    ){}

    @Post('start/:number_process')
    @ApiOperation({summary:" start working in process"})
    async workingInProcess(
        @Param('number_process')id:number,
        @GetUser() techinician: TechnicianEntity)
    {
        return this.workProcess.toStartWork(techinician,id)  
    }

    @Post('finishWork/:number_process')
    @ApiOperation({summary:"Finish Work"})
    async finishWork(
        @Param('number_process')process_number:number,
        @GetUser() techinician: TechnicianEntity
    ){
       return this.workProcess.finishWork(process_number, techinician)
    } 
}
