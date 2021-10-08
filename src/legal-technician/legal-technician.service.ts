import { Injectable } from '@nestjs/common';
import { CreateTechnicianDto } from './dto/create.technician.dto';
import { UpdateTechnicianDto } from './dto/update.technician.dto';
import { techinicianRepository } from './legal-techinician.repository';

@Injectable()
export class LegalTechnicianService {
    constructor(
        private readonly techinician:techinicianRepository
    ){}

    async findOne(registration:string){
        return this.techinician.findOneTechnician(registration)
    }

    async findByEmail(email:string){
        return  this.techinician.findByEmail(email)
    }
    async register(data:CreateTechnicianDto){
        return this.techinician.registerTecninician(data)
    }
    
    async update(registration:string,data:UpdateTechnicianDto){
        return this.techinician.updateDataTechinician(registration,data)
    }
}
