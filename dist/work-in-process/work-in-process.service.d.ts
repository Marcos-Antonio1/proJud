import { ProcessService } from 'src/process/process.service';
export declare class WorkInProcessService {
    private readonly process;
    constructor(process: ProcessService);
    toStartWork(techinician: any, n_process: any): Promise<{
        msg: string;
    }>;
    finishWork(n_process: any, techinician: any): Promise<{
        msg: string;
    }>;
}
