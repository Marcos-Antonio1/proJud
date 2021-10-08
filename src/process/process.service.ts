import { Injectable,NotFoundException } from '@nestjs/common';
import { ProcessEntity } from './entity/process.entity';
import { CreateProcessDto } from './dto/create.process.dto';
import { UpdateProcessDto } from './dto/update.process.dto';
import { LegalTechnicianService } from 'src/legal-technician/legal-technician.service';
import { processRepository } from './process.repository';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class ProcessService {
    constructor(
        private readonly process:processRepository,
        private readonly technician:LegalTechnicianService
        ){}

    async findOne(number_process:string){
        return this.process.findOneProcess(number_process);
    }
    async registerProcess(registration:string,data:CreateProcessDto){
        const user= await this.technician.findOne(registration);
        return this.process.registerProcess(user,data)
    }
    async EditProcess(number_process:string,data:UpdateProcessDto){
        return this.process.EditProcess(number_process,data)
    }
    async getAllProcess(){
        return this.process.getAllProcess()
    }

    async create(data){
        return this.process.create(data)
    }

    async processUpdate(process){
        return this.process.updateProcess(process);
    }

    async toWork(technician,n_process){
        const techinician_found = await this.technician.findByEmail(technician.email)
        let process:ProcessEntity = await this.process.findOne({number_process:n_process,tecEditing:techinician_found})


        if(process){
            return {msg:"você já está trabalhando neste processo"}
        }
        
        const {affected}=await this.process.update({number_process:n_process,tecEditing:null},{tecEditing:techinician_found})


        if(affected == 1){
            return {msg:"processo atribuido com sucesso"}
        }else{
            throw new ConflictException("processo já está sendo editado")
        } 
    }

    async finishWork(n_process,techinician){
        
        const techinician_found = await this.technician.findByEmail(techinician.email)
        
        const {affected}=await this.process.update({number_process:n_process,tecEditing:techinician_found},{tecEditing:null,tecLastEdit:techinician_found,updateAt:new Date()})

        if(affected == 1){
            return {msg:"Atualização finalizada"}
        }else{
            throw new ConflictException("processo só pode ser finalizado pela pessoa que está o editando")
        }

    }    
        
}
