import { Injectable } from '@nestjs/common';
import { LegalTechnicianService } from 'src/legal-technician/legal-technician.service';
import { ProcessEntity } from 'src/process/entity/process.entity';
import { ProcessService } from 'src/process/process.service';

@Injectable()
export class WorkInProcessService {

    constructor(
        private readonly process: ProcessService,
    ){}

    async toStartWork(techinician,n_process){
        

        return this.process.toWork(techinician,n_process)
        
    }

    async finishWork(n_process,techinician){
        
        return this.process.finishWork(n_process,techinician)
    } 
}
