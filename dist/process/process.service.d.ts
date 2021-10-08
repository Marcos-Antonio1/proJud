import { ProcessEntity } from './entity/process.entity';
import { CreateProcessDto } from './dto/create.process.dto';
import { UpdateProcessDto } from './dto/update.process.dto';
import { LegalTechnicianService } from 'src/legal-technician/legal-technician.service';
import { processRepository } from './process.repository';
export declare class ProcessService {
    private readonly process;
    private readonly technician;
    constructor(process: processRepository, technician: LegalTechnicianService);
    findOne(number_process: string): Promise<ProcessEntity>;
    registerProcess(registration: string, data: CreateProcessDto): Promise<ProcessEntity>;
    EditProcess(number_process: string, data: UpdateProcessDto): Promise<ProcessEntity>;
    getAllProcess(): Promise<ProcessEntity[]>;
    create(data: any): Promise<ProcessEntity[]>;
    processUpdate(process: any): Promise<any>;
    toWork(technician: any, n_process: any): Promise<{
        msg: string;
    }>;
    finishWork(n_process: any, techinician: any): Promise<{
        msg: string;
    }>;
}
