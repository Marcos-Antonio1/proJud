import { JwtService } from '@nestjs/jwt';
import { LegalTechnicianService } from 'src/legal-technician/legal-technician.service';
export declare class AuthService {
    private techinicianService;
    private jwtService;
    constructor(techinicianService: LegalTechnicianService, jwtService: JwtService);
    validateTechinician(email: string, password: string): Promise<{
        registration: string;
        name: string;
        email: string;
        updatedAt: string;
        createAt: string;
        process: import("../process/entity/process.entity").ProcessEntity[];
        processEdited: import("../process/entity/process.entity").ProcessEntity[];
    }>;
    login(techinician: any): Promise<{
        access_token: string;
    }>;
}
