import { NotFoundException } from "@nestjs/common";
import { LegalTechnicianService } from "src/legal-technician/legal-technician.service";
import { EntityRepository, Repository } from "typeorm";
import { CreateProcessDto } from "./dto/create.process.dto";
import { UpdateProcessDto } from "./dto/update.process.dto";
import { ProcessEntity } from "./entity/process.entity";

@EntityRepository(ProcessEntity)
export class processRepository extends Repository<ProcessEntity> {
    

    async findOneProcess(number_process:string){
        
        return await this.findOne(number_process);
        
    }

    async registerProcess(user,data:CreateProcessDto){
          
        let pro = this.create(data);
        pro.tecCreate=user;
        return this.save(pro);
    }

    async EditProcess(number_process:string,data:UpdateProcessDto){
        let pro_found = await this.findOne(number_process);
        this.merge(pro_found,data)
        return this.save(pro_found);
    }

    async getAllProcess(){
        return this.createQueryBuilder('process').getMany()
    }

    async updateProcess(process){
       return this.save(process);
    }
}