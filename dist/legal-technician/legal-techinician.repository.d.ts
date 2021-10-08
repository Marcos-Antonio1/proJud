import { Repository } from "typeorm";
import { CreateTechnicianDto } from "./dto/create.technician.dto";
import { UpdateTechnicianDto } from "./dto/update.technician.dto";
import { TechnicianEntity } from "./entity/Technician.entity";
export declare class techinicianRepository extends Repository<TechnicianEntity> {
    findOneTechnician(registration: string): Promise<TechnicianEntity>;
    findByEmail(email: string): Promise<TechnicianEntity>;
    registerTecninician(data: CreateTechnicianDto): Promise<TechnicianEntity>;
    updateDataTechinician(registration: string, data: UpdateTechnicianDto): Promise<TechnicianEntity>;
}
