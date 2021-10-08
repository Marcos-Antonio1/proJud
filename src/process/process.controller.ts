import { Get, Param, UseGuards } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { CreateProcessDto } from './dto/create.process.dto';
import { UpdateProcessDto } from './dto/update.process.dto';
import { ProcessService } from './process.service';


@Controller('process')
@ApiTags('process')
@ApiBearerAuth()
export class ProcessController {
    constructor(private readonly processService:ProcessService){}

    @UseGuards(JwtAuthGuard)
    @Post('/register')
    @ApiOperation({summary:"Create new process"})
    async registerProcess(@Param('registration')registration:string,@Body() body:CreateProcessDto){
        return await this.processService.registerProcess(registration,body);
    }
    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @ApiOperation({summary:"list all process"})
    async findAllProcess(){
        return await this.processService.getAllProcess();
    }
    @UseGuards(JwtAuthGuard)
    @Get(':number_process')
    @ApiOperation({summary:"get one process"})
    async findProcess(@Param('number_process')number_process:string){
        return await this.processService.findOne(number_process)
    }
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @ApiOperation({summary:"update one process"})
    async editProcess(@Param('number_process')number_process:string,@Body()body:UpdateProcessDto){
        return await this.processService.EditProcess(number_process,body)
    }
}
