import { Get, UseGuards } from '@nestjs/common';
import { Body, Post, Put,Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/JwtAuthGuard';
import { CreateTechnicianDto } from './dto/create.technician.dto';
import { UpdateTechnicianDto } from './dto/update.technician.dto';
import { LegalTechnicianService } from './legal-technician.service';

@Controller('techinician')
@ApiTags('techinician')
export class LegalTechinicianController {
    constructor(private readonly techinicianService:LegalTechnicianService ){}    
    @Post('/register')
    @ApiOperation({summary:"Create new techinician"})
    async registerTecninician(@Body() body:CreateTechnicianDto){
        return await this.techinicianService.register(body);
    }
    
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @ApiOperation({summary:"edit a techinician"})
    async updataTecninician (@Param('registration')registration:string,@Body() body:UpdateTechnicianDto){
        return await this.techinicianService.update(registration,body);
    }

}
