import { ConflictException, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTechnicianDto } from "./dto/create.technician.dto";
import { UpdateTechnicianDto } from "./dto/update.technician.dto";
import { TechnicianEntity } from "./entity/Technician.entity";

@EntityRepository(TechnicianEntity)
export class techinicianRepository extends Repository<TechnicianEntity > {
    
    async findOneTechnician(registration:string){
        try{
            return await this.findOneOrFail(registration);
        }catch(error){
            throw new NotFoundException("Técnico não encontrado");
        }
    }

    async findByEmail(email:string){
        return await this.findOne({email}) 
    }

    async registerTecninician(data:CreateTechnicianDto){
        const tec = await this.findByEmail(data.email)
        try{
            const tec= this.create(data)
            return await this.save(tec);
        }catch(error){
            if(error.code == 23505){
                throw new ConflictException('Esse usuário já está cadastrado')
            }else{
                throw error;
            }
        }
    }

    async updateDataTechinician(registration:string,data:UpdateTechnicianDto){
        const tec = await this.findOneTechnician(registration);
        this.merge(tec,data);
        return this.save(tec);
    }
}
