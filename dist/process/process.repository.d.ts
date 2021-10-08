import { Repository } from "typeorm";
import { CreateProcessDto } from "./dto/create.process.dto";
import { UpdateProcessDto } from "./dto/update.process.dto";
import { ProcessEntity } from "./entity/process.entity";
export declare class processRepository extends Repository<ProcessEntity> {
    findOneProcess(number_process: string): Promise<ProcessEntity>;
    registerProcess(user: any, data: CreateProcessDto): Promise<ProcessEntity>;
    EditProcess(number_process: string, data: UpdateProcessDto): Promise<ProcessEntity>;
    getAllProcess(): Promise<ProcessEntity[]>;
    updateProcess(process: any): Promise<any>;
}
