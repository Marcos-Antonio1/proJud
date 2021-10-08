import { TechnicianEntity } from 'src/legal-technician/entity/Technician.entity';
import { WorkInProcessService } from './work-in-process.service';
export declare class WorkInProcessController {
    private readonly workProcess;
    constructor(workProcess: WorkInProcessService);
    workingInProcess(id: number, techinician: TechnicianEntity): Promise<{
        msg: string;
    }>;
    finishWork(process_number: number, techinician: TechnicianEntity): Promise<{
        msg: string;
    }>;
}
