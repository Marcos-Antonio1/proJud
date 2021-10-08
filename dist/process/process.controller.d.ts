import { CreateProcessDto } from './dto/create.process.dto';
import { UpdateProcessDto } from './dto/update.process.dto';
import { ProcessService } from './process.service';
export declare class ProcessController {
    private readonly processService;
    constructor(processService: ProcessService);
    registerProcess(registration: string, body: CreateProcessDto): Promise<import("./entity/process.entity").ProcessEntity>;
    findAllProcess(): Promise<import("./entity/process.entity").ProcessEntity[]>;
    findProcess(number_process: string): Promise<import("./entity/process.entity").ProcessEntity>;
    editProcess(number_process: string, body: UpdateProcessDto): Promise<import("./entity/process.entity").ProcessEntity>;
}
