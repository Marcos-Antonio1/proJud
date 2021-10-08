import { CreateTechnicianDto } from './dto/create.technician.dto';
import { UpdateTechnicianDto } from './dto/update.technician.dto';
import { techinicianRepository } from './legal-techinician.repository';
export declare class LegalTechnicianService {
    private readonly techinician;
    constructor(techinician: techinicianRepository);
    findOne(registration: string): Promise<import("./entity/Technician.entity").TechnicianEntity>;
    findByEmail(email: string): Promise<import("./entity/Technician.entity").TechnicianEntity>;
    register(data: CreateTechnicianDto): Promise<import("./entity/Technician.entity").TechnicianEntity>;
    update(registration: string, data: UpdateTechnicianDto): Promise<import("./entity/Technician.entity").TechnicianEntity>;
}
