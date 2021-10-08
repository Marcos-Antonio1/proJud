import { CreateTechnicianDto } from './dto/create.technician.dto';
import { UpdateTechnicianDto } from './dto/update.technician.dto';
import { LegalTechnicianService } from './legal-technician.service';
export declare class LegalTechinicianController {
    private readonly techinicianService;
    constructor(techinicianService: LegalTechnicianService);
    registerTecninician(body: CreateTechnicianDto): Promise<import("./entity/Technician.entity").TechnicianEntity>;
    updataTecninician(registration: string, body: UpdateTechnicianDto): Promise<import("./entity/Technician.entity").TechnicianEntity>;
}
